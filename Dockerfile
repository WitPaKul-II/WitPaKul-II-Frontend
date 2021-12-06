FROM node:14.16.1-alpine3.10 as build
COPY . /
WORKDIR /
RUN npm install
RUN npm run build


FROM nginx:1.19.10-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build /usr/share/nginx/html/frontend
EXPOSE 80
