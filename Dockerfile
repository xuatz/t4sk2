FROM node:11 as build

RUN mkdir -p /code
COPY . /code
WORKDIR /code
RUN yarn install && yarn run build

FROM nginx:alpine
COPY --from=build /code/build /usr/share/nginx/html/
COPY --from=build /code/resources/nginx.conf /etc/nginx/conf.d/default.conf
