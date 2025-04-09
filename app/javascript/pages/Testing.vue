<template>
  <div
    v-on-resize="{ breakpoint: 1024, action: onChangeView }"
    class="min-h-screen flex items-center justify-center"
  >
    <div class="overflow-x-auto mt-16">
      <component
        :is="!isMobileView ? TableComponent : StackComponent"
        :data="data"
        :fields="undefined"
        :headerClass="'bg-red-300'"
        :rowClass="'text-left odd:bg-slate-100 even:bg-slate-200 border-dotted border-b-2 border-slate-300 lg:text-center lg:border-none'"
        :footerClass="'footer-class'"
        :isLoading="false"
        :labelOfAdditionContent="''"
        class="bg-red-100"
      >
        <template #sex="{ item }">
          <span
            :class="item['sex'] === 'male' ? 'text-slate-500' : 'text-red-300'"
          >
            {{ item["sex"] }}
          </span>
        </template>
        <template #dateOfBirth="{ item }">
          <span>
            {{ moment(item["dateOfBirth"]).format("LL") }}
          </span>
        </template>
        <template #joinedAt="{ item }">
          <span>
            {{ moment(item["joinedAt"]).fromNow() }}
          </span>
        </template>
        <template #caption>
          <h1 class="text-2xl">Testing</h1>
        </template>
      </component>
    </div>
    <div class="z-10 fixed bottom-10 right-1 p-5 m-5 bg-base-300 bg-green-100">
      <div class="grid grid-cols-2 gap-x-1">
        <div class="w-36">
          <RadioButtonGroup
            :data="fields"
            :selectedItem="staffKeys"
            @onSelectItem="(payload: any) => (staffKeys = payload)"
            :className="'daisy-label cursor-pointer inline'"
            :inputFieldClass="'daisy-radio daisy-radio-primary'"
            :labelClass="'daisy-label-text float-right'"
          />
        </div>
        <div class="w-36">
          <RadioButtonGroup
            :data="[
              { label: 'Ascending', value: 'asc' },
              { label: 'Descending', value: 'desc' },
            ]"
            :selectedItem="order"
            @onSelectItem="(payload: 'asc' | 'desc') => (order = payload)"
            :className="'p-1 text-center'"
            :inputFieldClass="'hidden peer px-1 disabled:opacity-25'"
            :labelClass="'text-center cursor-pointer peer-checked:bg-yellow-100 peer-checked:border-yellow-200 inline-flex items-center justify-center w-full p-3 border border-dark rounded'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { ref, computed, watch } from "vue";
import StackComponent from "@/components/table/StackComponent.vue";
import TableComponent from "@/components/table/TableComponent.vue";
import RadioButtonGroup from "@/components/inputs/RadioButtonGroup.vue";

import randomTimestamp from "@/utils/randomTimestamp.ts";
import moment from "moment";

import { type Data, type StaffKeys, SEX } from "@/types/types.ts";

const rawData: Data[] = [
  {
    id: 111,
    name: "Angela",
    sex: SEX.FEMALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 112,
    name: "Winnie",
    sex: SEX.FEMALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 113,
    name: "Sam",
    sex: SEX.MALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 114,
    name: "David",
    sex: SEX.MALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 115,
    name: "Charlie",
    sex: SEX.FEMALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 116,
    name: "Ellen",
    sex: SEX.FEMALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 117,
    name: "Usula",
    sex: SEX.FEMALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 118,
    name: "Fred",
    sex: SEX.MALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 119,
    name: "Lawrence",
    sex: SEX.MALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
  {
    id: 120,
    name: "William",
    sex: SEX.MALE,
    dateOfBirth: randomTimestamp(new Date(1959, 0, 1), new Date(2006, 0, 1)),
    joinedAt: randomTimestamp(new Date(2019, 0, 1)),
  },
];

const data = ref<Data[]>(rawData);
const staffKeys = ref<StaffKeys>("id");
const order = ref<"asc" | "desc">("asc");
const fields = computed<{ label: string; value: string }[]>(() => {
  return Object.keys(data.value[0]).map((item) => {
    return {
      label: item.toUpperCase(),
      value: item,
    };
  });
});
const windowWidth = ref<number>(0);
const isMobileView = ref<boolean>(false);

const orderBy = (a: any, b: any) => {
  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

  const x = getProperty(a, staffKeys.value);
  const y = getProperty(b, staffKeys.value);

  if (typeof x === "string") {
    const _x = x.toLowerCase();
    const _y = y.toLowerCase();

    return order.value === "asc" ? (_x < _y ? -1 : 1) : _x > _y ? -1 : 1;
  } else if (typeof x === "number") {
    return order.value === "asc" ? x - y : y - x;
  } else {
    return 0;
  }
};

const onChangeView = (payload: {
  windowWidth: number;
  isMobileView: boolean;
}) => {
  windowWidth.value = payload.windowWidth;
  isMobileView.value = payload.isMobileView;
};

const vOnResize = (_el: any, binding: any) => {
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const windowWidth = entry.contentRect.width;
      const isMobileView = entry.contentRect.width < binding.value.breakpoint;
      binding.value.action({ isMobileView, windowWidth });
    });
  });
  resizeObserver.observe(document.body);
};

watch([() => staffKeys.value, () => order.value], () => {
  data.value = data.value.sort(orderBy);
});
</script>

<style scoped></style>
