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

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

EXPOSE 80
