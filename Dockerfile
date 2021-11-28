FROM node:17-alpine AS webBuild

WORKDIR /webBuild
COPY . .
RUN npm i 
RUN npm run build

FROM composer:2 AS phpVendor

WORKDIR /deps
COPY . .
RUN composer install


FROM php:8.0-apache AS final

WORKDIR /var/www/html

RUN mkdir public src templates config vendor
COPY --from=webBuild ./webBuild/public public
COPY --from=webBuild ./webBuild/src src
COPY --from=webBuild ./webBuild/templates templates
COPY --from=webBuild ./webBuild/config config
COPY --from=phpVendor ./deps/vendor vendor

EXPOSE 80
