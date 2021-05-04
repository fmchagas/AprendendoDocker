# Crinado minha imagem e entendo docker file

Dentro do projeto criar o arquivo Dockerfile, que é do que um arquivo de texto. Ele pode ter qualquer nome, porém nesse caso ele também deve possuir a extensão .dockerfile, por exemplo spring.dockerfile.


Criar arquivo chamado Dockerfile e a receita basica fica como os exemplos abaixo

```
	FROM node:latest
	MAINTAINER Dunha
	ENV PORT=3000
	COPY . /var/www
	WORKDIR /var/www
	RUN npm install
	ENTRYPOINT npm start
	EXPOSE 3000
```

```	
	FROM openjdk:8-alpine
	RUN addgroup -S spring && adduser -S spring -G spring
	USER spring:spring
	ARG JAR_FILE=target/*.jar
	COPY ${JAR_FILE} app.jar
	ENTRYPOINT ["java","-Xmx512m","-Dserver.port=${PORT}","-jar","/app.jar"]
```

Como construir a imagem?

Fazer build através do comando **docker build**, a partir de um **Dockerfile**. Passamos o nome do Dockerfile através da flag -f

```
 docker build -f Dockerfile -t dunha/node .
 
 docker build -t dunha/forum .
```