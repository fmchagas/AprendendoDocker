# Docker Compose

Quando precisamos ter **muitos container** ou em alguns momento deixamos de passar uma parametro, todas as flags tem que seguir uma ordem, tudo isso começa a ficar complicado, então vem o **Docker Compose** que nos auxiliará a lidar com múltiplos containers(**orquestrar a criação de container**).

O Docker Compose(é muito massa) funciona em um arquivo texto YAML(extensão .yml) e nele colocamos todo o processo de construção(vulgo build).

Com o *docker-compose.yml* criado rode os comandos abaixo, no linux o docker-compose não vem por padrão, tem que instalar

```
 docker-compose build
 docker-compose up -d
```

Criar um arquivo dentro do projeto chamado *docker-compose.yml*, segue exemplo de um docker compose, deve ser adaptado para nescecidade de uso.

```
version: '3'
services:
    nginx:
        build:
            dockerfile: ./docker/nginx.dockerfile
            context: .
        image: fmchagas/nginx
        container_name: nginx
        ports:
            - "80:80"
        networks: 
            - production-network
        depends_on: 
            - "node1"
            - "node2"
            - "node3"

    mongodb:
        image: mongo
        networks: 
            - production-network

    node1:
        build:
            dockerfile: ./docker/alura-books.dockerfile
            context: .
        image: fmchagas/alura-books
        container_name: alura-books-1
        ports:
            - "3000"
        networks: 
            - production-network
        depends_on:
            - "mongodb"

    node2:
        build:
            dockerfile: ./docker/alura-books.dockerfile
            context: .
        image: fmchagas/alura-books
        container_name: alura-books-2
        ports:
            - "3000"
        networks: 
            - production-network
        depends_on:
            - "mongodb"

    node3:
        build:
            dockerfile: ./docker/alura-books.dockerfile
            context: .
        image: fmchagas/alura-books
        container_name: alura-books-3
        ports:
            - "3000"
        networks: 
            - production-network
        depends_on:
            - "mongodb"

networks: 
    production-network:
        driver: bridge
```
