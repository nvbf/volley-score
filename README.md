scoreboard-obs-plugin
========================

Creates/Updates 6 files with the information you provide from the website. 

To be used together with https://obsproject.com/ to provide a beachvolleyball scoreboard graphical layer on top of the stream you have from the same host. 

The files that will be created is:

* score1.txt  - current score for the hometeam
* score2.txt - current score for the awayteam
* set1.txt - how many sets the hometeam has won
* set2.txt - how many sets the awayteam has won
* name1.txt - name of the hometeam
* name2.txt - name of the away team

by default you can find the application on localhost:3000 if you do not set PORT
you need to set the env.var OBSPLUGINPATH so that the system knows where to place the files. 

The system also need access to write to the files. If you have any problems check that the correct path is added and that the application have access to created it yourself

## Prerequisites
Node


## Environment variables

OBSPLUGINPATH (obligatory) : The path to where it should update the point

PORT (optional) : Will default to 3000 if it's not set


## E.g

`OBSPLUGINPATH=/home/dir/obs/ PORT=3001 node index.js`


## Update from another computer then is brodcasting. 
We recommend to install and try https://ngrok.com/  

with ngrok you can access your local website from the internet. And therefor update the local computer from a tablet or similar. without having to start this webapp on their computer.



