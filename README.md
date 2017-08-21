OBS Scoreboard
========================

Creates/Updates eight files with the information you provide from the website.

To be used together with [OBS](https://obsproject.com/), to provide a (beach) volleyball scoreboard graphical layer on top of the stream you have from the same host.

####The files that will be created is:

* scoreA.txt  - current score for the home team
* scoreB.txt - current score for the away team
* setA.txt - how many sets the home team has won
* setB.txt - how many sets the away team has won
* nameA.txt - name of the home team
* nameB.txt - name of the away team
* logoA.txt - identifier for home team logo
* logoB.txt - identifier for away team logo

By default you can find the application on ```http://localhost:3000```.
The web-based scoreboard output is found on ```http://localhost:3000/score.html```.

You need to install and run Redis before running the server.

The system also need access to write to the files. If you have any problems check that the correct path is added and that the application have access rights.

## Prerequisites
* Node.js
* Redis

## Environment variables
* `PORT` (optional) : Will default to 3000 if it's not set

## install
```
npm install
```

## Run Example

```
PORT=3000 node index.js
```

## Update from another device
We recommend to install and try [ngrok](https://ngrok.com/).  

With [ngrok](https://ngrok.com/) you can access your local website from the internet, and update the local computer from a tablet or similar. Without having to start this app on their computer.

## Deployment on dokku

First, on your **dokku instance**, create an app.

### Create app
```
dokku apps:create <APP_NAME>
```

Then we need to install the dokku redis plugin, and create a redis instance for our app.


### Install and link redis plugin
```
sudo dokku plugin:install https://github.com/dokku/dokku-redis.git redis
dokku redis:create <REDIS_NAME>
dokku redis:link <REDIS_NAME> <APP_NAME>

```

### Add dokku git remote

On our own computer, add a dokku git remote that we can push to for deployment:
```
git remote add dokku dokku@your-domain.com:<APP_NAME>
```
Then we can deploy our master branch to this dokku remote every time we want to deploy.
```
git push dokku master
```
