FROM nginx:1.17.4

ADD  dist /usr/share/nginx/html/
COPY mysite.template /etc/nginx/conf.d/
CMD envsubst '$api' < /etc/nginx/conf.d/mysite.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'