# Desafio de empocatar uma imagem GOLang

### Especificação:
1. Criar imagem que ao rodar imprime "Full Cycle Rocks!!"
2. Usar GOLang para imprimir "Full Cycle Rocks!!"
3. A imagem de nosso desafio precisa ter menos de 2MB
4. Enviar a imagem criada para docker hub
5. Utilizar Multistage Building(está dentro do arquivo Dockerfile)

### Imagem GO

https://hub.docker.com/r/fmchagas/fullcycle

---
Fazer build do Dockerfile:

```bash
docker build -t fmchagas/fullcycle . -f Dockerfile
```

Rodar app:

```bash
docker run --rm fmchagas/fullcycle
```
