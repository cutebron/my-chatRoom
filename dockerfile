FROM nginx
MAINTAINER bron
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/  /usr/share/nginx/html/
