# Iniciando no Docker - Comandos basicos

A imagem é como se fosse uma receita de bolo, uma série de instruções que o Docker seguirá para criar um container. Apartir da imagem criamos muitos container

```shell
 docker version (docker -v)
```

listar containers ativos | lista todos os container

```
 docker ps | docker ps -a
```


Lista imagens no host

```
 docker images
```

Baixa uma imagem do Docker Hub e cria um container do ubuntu no modo interativo

```
  docker run -it ubuntu /bin/bash
```

Sair do container

```
  ctrl + d --> Mata o container.
  crtl + pq --> Sai do container e mantem ativo.
```

Acessar o container

```
  docker attach <container ID>
  
  docker start -a -i <container ID>
```

Criar um container rodando o Nginx, -p é de porta, isto significa que meu pc(host) vai rodar na porta 8080 e 80 é porta do container.

O que vai acontecer?

      O container na porta 80(que rodando o Nginx) vai expor na porta 8080 do pc fisico(host)
       [localhost:8080 --> container:80]
    
    docker run -it -p 8080:80 ubuntu /etc/bash



Como manter as modificações feitas na imagem?
  
```  
  fazendo um commit.
  docker commit <container ID> <nome-da-imagem:versão>
  
  docker commit d89bbbcad09d nginx-ubuntu:1.0
```

Subir nova imagem criada

```
  docker run -it -p 6660:80 nginx-ubuntu:1.0 /etc/bash
```

Inicar container criado

```
 docker start <container ID>
 docker container start <container ID>
 
 docker start -a -i <container ID> (modo interativo e attach)
```

Como parar um containter?

```
   docker stop <container ID>
   docker container stop <container ID>
```

Remover todos os containers inativos

```
docker container prune

docker rm <container_id> remover um unico container
```