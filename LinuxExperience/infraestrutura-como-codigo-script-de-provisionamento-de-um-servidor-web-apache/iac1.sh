#!/bin/bash

sudo apt update && sudo apt upgrade -y && sudo apt install apache2 unzip git -y 

cd /var/www/html
git clone https://github.com/denilsonbonatti/linux-site-dio.git

cd linux-site-dio && cp -r * ../ && cd .. && rm -rf linux-site-dio
