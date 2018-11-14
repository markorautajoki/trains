FROM node:carbon-alpine as stage1

WORKDIR /opt/app

COPY . ./

RUN npm install \
   && npm run dist

FROM nginx:alpine

WORKDIR /opt/app

COPY --from=stage1 /opt/app/dist /opt/app
COPY --from=stage1 /opt/app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
