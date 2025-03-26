# Rails 8 Starter

## Introduction

This repository is project starter using Ruby on Rails 8.

## Features
TBC

## Technical information

### Backend

#### Ruby

**Ruby 3.4.2** is used on this repo

#### Rails

**Rails 8.0.2** is used on this repo

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

4. Wait a moment and access ```http://localhost:3000``` on Web browser.

### (Optional) Edit your host name
1. For example, if you want using ```http://rails-8-playground.test``` as the customized host in your computer, modify the following configuration ```.env``` file as follow:

```yml
HOST_NAME=rails-8-playground.test
```

2. open the hosts file by vi editor using ```sudo vi /etc/hosts```

3. Add ```127.0.0.1   rails-8-playground.test``` to the hosts file

4. Restart the container by ```docker-compose down && docker-compose up -d```

5. Access ```http://rails-8-playground.test``` by web browser.

Happy Coding !!!!!!