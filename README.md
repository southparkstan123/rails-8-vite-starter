# Rails 8 Vite Starter

## Introduction

This repository is project starter using Vite Ruby(include Ruby on Rails 8) with Vue 3 and InertiaJS for frontend.

## Features
TBC

## Technical information

### Backend

#### Ruby

**Ruby 3.4.2** is used on this repo

#### Rails

**Rails 8.0.2** is used on this repo

### Frontend

#### Javascript Framework

**Vue 3.5.13** is used on this repo

#### CSS Framework

**TailwindCSS 4.0.17** is used on this repo

## Setup the environment on Docker

1. Clone this repo by Github using command line prompt:

```bash
git clone https://github.com/southparkstan123/rails-8-starter.git
```

2. Environment variables

You can add the .env files to store the configuration value for different environments , the example file is in ```.env.template```, just copy this file for specific environment, for example ```.env.development.local``` file. 

**Caution!!!**

**Avoid to commit the ```.env``` file which may contains the sensitive information such as API keys, credentials, etc.**


3. Run the following command to prepare the Docker image and start the Rails services:

```bash
docker-compose up --build 
```

4. Wait a moment and access ```http://localhost:3000``` on app browser.

### (Optional) Edit your host name
1. For example, if you want using ```http://rails-8-playground.test``` as the customized host in your computer, modify the following configuration ```.env``` file as follow:

```yml
HOST_NAME=rails-8-playground.test
```

2. open the hosts file by vi editor using ```sudo vi /etc/hosts```

3. Add ```127.0.0.1   rails-8-playground.test``` to the hosts file

4. Restart the container by ```docker-compose down && docker-compose up -d```

5. Access ```http://rails-8-playground.test``` by app browser.

## Useful commands after establish the environment:

1. Run the following command to start the app:
```bash
# depends on .env by default
docker-compose up
```

or specify an env file for several environment such as ```.env.development.local```.

```bash
# depends on .env.development.local
docker-compose --env-file ./.env.development.local up
```

2. Run the following command to restart the app:
```bash
docker-compose restart
```

3. Run the following command to shutdown the app:
```bash
docker-compose down
```

4. Run the following command to clean up old unused builds to keep my system clean:
```bash
docker system prune --all
```

5. Run the following command to install dependencies for frontend
```bash
npm install 
```

6. Run the following command to build frontend bundles:
```bash
bin/vite build
```

7. Run the following command to start the frontend development mode (HMR enable):
```bash
bin/dev
```

Happy Coding !!!!!!