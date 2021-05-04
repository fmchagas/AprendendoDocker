# O que é container
  Um container Linux é um conjunto de um ou mais processos organizados
isoladamente do sistema.

  Uma imagem de container tem suas configuraçõe seus RPM e outro elementos
porem compartilha do kernel do sistema operaciona.

- Humm então isso é o mesmo que virtualização?
Não, as duas tecnologias são complementares.

Vitualização: é possivel execuatar S.O(windows ou Linux) simultaneamente em um
único sistema de hardware(Infra).

A virtualização usa um hipervisor para emular o hardware, o que permite
executar vários sistemas operacionais simultaneamente. Essa não é uma solução
tão leve quanto o uso de containers.

  Os containers compartilham o mesmo kernel do sistema operacional e isolam
os processos da aplicação do restante do sistema.
  Em comparação com as máquinas virtuais, executar containers Linux consome
menos recursos, oferece uma interface padrão (início, interrupção,
variáveis de ambiente etc.), mantém a aplicação isolada e facilita
o gerenciamento dos processos, como parte de uma aplicação maior (vários containers).
Além disso, é possível orquestrar as aplicações em vários containers
em diversas clouds.

[referência](https://www.redhat.com/pt-br/topics/containers/whats-a-linux-container)

Veja na imagem  a diferença entre Containers e VM(Máquina Virtual)
![demo](./Diferenciar Containers e VM.png "Diferença entre Containers e VM(Máquina Virtual)")  