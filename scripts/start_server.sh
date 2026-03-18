#!/bin/bash
cd /home/ubuntu/my-app
# Stop any old versions running
pm2 delete all
# Start the new server
pm2 start server.js --name "restaurant-app"