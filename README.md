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

You need to set the environment variable ```OBSPLUGINPATH``` so that the system knows where to place the files.

The system also need access to write to the files. If you have any problems check that the correct path is added and that the application have access rights.

## Prerequisites
Node

## Environment variables
* `OBSPLUGINPATH` (obligatory) : The path to where it should update the point
* `PORT` (optional) : Will default to 3000 if it's not set

## Run Example

```
OBSPLUGINPATH=/home/dir/obs/ PORT=3001 node index.js
```

## Update from another device
We recommend to install and try [ngrok](https://ngrok.com/).  

With [ngrok](https://ngrok.com/) you can access your local website from the internet, and update the local computer from a tablet or similar. Without having to start this app on their computer.
