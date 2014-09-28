FROM ubuntu:13.10
MAINTAINER Raphael Amorim

RUN apt-get update
RUN apt-get install -y nodejs
RUN mkdir /var/www

ADD app.js /var/www/app.js

CMD ["nodejs", "/var/www/app.js"]
