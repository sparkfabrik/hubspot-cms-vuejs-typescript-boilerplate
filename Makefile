uname_S := $(shell uname -s)

all: build up

build:
	docker-compose build --pull
	docker-compose run --rm hubspot bash -c "yarn install"

up:
	docker-compose down -v
	docker-compose up -d

cli:
	docker-compose run --rm hubspot bash

start:
	docker-compose run --rm hubspot bash -c "yarn start"

lint:
	docker-compose run --rm hubspot bash -c "yarn lint"

test:
	docker-compose run --rm hubspot bash -c "yarn test:unit"

deploy:
	docker-compose run --rm hubspot bash -c "yarn deploy"

