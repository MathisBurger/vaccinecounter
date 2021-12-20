FROM node:17-alpine AS webBuild

WORKDIR /webBuild
COPY . .
RUN npm i 
RUN npm run build

FROM php:8.0-cli AS final

RUN apt-get update -y && apt-get install -y libmcrypt-dev

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring

WORKDIR /app
COPY . /app
RUN rm -r ./public
COPY --from=webBuild ./webBuild/public ./public

RUN composer install

EXPOSE 8000
CMD php bin/console server:run 0.0.0.0:8000
