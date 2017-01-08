scoreboard-obs-plugin
========================

creates 2 files (`score1.txt` and `score2.txt`), with the points from the website.

by default you can find the application on localhost:3000 if you do not set PORT

## Prerequisites
Node


## Env var

OBSPLUGINPATH (obligatory) : The path to where it should update the point

PORT (optional) : Will default to 3000 if it's not set


## E.g

`OBSPLUGINPATH=/home/dir/obs/ PORT=3001 node index.js`
