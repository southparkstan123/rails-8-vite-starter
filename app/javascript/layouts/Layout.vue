<template>
  <main>
    <MyVueNavBar :backgroundClass="'bg-slate-300'" :breakpoint="768">
      <template #body-content>
        <Link href="/" :class="{ 'block md:inline text-red-300 cursor-not-allowed': $page.url === '/' }">Home</Link>
        <Link href="/inertia-example" :class="{ 'block md:inline text-red-300 cursor-not-allowed': $page.url === '/inertia-example' }">Example</Link>
        <Link href="/testing" :class="{ 'block md:inline text-red-300 cursor-not-allowed': $page.url === '/testing' }">Testing</Link>
      </template>
    </MyVueNavBar>
    <article class="py-4">
      <slot />
    </article>
  </main>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import MyVueNavBar from "@/components/menu/MyVueNavBar.vue";
</script>
