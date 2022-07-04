FROM php:8.1.2-fpm-buster

ENV COMPOSER_ALLOW_SUPERUSER=1 \
    COMPOSER_HOME=/composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN apt-get update && \
    apt-get -y install \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libicu-dev \
    libonig-dev \
    zip \
    unzip \
    nodejs \
    npm && \
    apt-get clean
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg &&\
    docker-php-ext-install -j$(nproc) gd \
    intl \
    pdo_mysql \
    bcmath
RUN npm install -g n && \
    n stable
COPY ./php.ini /usr/local/etc/php/php.ini
WORKDIR /work