#!/bin/bash
cd /home/ubuntu/my-app
sudo apt-get update
sudo apt-get install -y nodejs npm
npm install express
sudo npm install -g pm2