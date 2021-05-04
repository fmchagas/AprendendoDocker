Executar comando em container ativo apartir do shell do host

```
 docker exe <container_ID> CMD
 
  ex: Listar processos ativos no container
  docker exec 9ab42cfb3014 ps -ef
  
  Saber se Nginx está ativo?
  docker exec 9ab42cfb3014 /etc/init.d/nginx status
```

Inspecionar container

```
  docker inspect <container ID>
```

Quanto de memoria, CPU e Net I/O o container está consumindo do host?


```
  docker stats <container_ID>
```

Como excluir um container?

```
  docker rm <container_ID>
```

Como remover uma image?

```
  docker rmi <image_ID>
```


Comunicando containers por link:

```
  docker run -it --name web2 --link ng1:ng1 nginx-ubuntu:1.0 /bin/bash
```
  

Criar container detached e publicado na porta 8080:80(host:container):

```
  docker container run -d --name srv_megatron --publish 8080:80 nginx
```