---
title: Criar um alias para o terminal linux permanente
date: 2021-04-17T20:29:06.705Z
description: Este tutorial mostra como criar e adicionar um alias permanentemente ao shell bash em sistemas Linux e semelhantes ao Unix
slug: como-criar-alias-permanente
---

Este tutorial mostra como criar e adicionar um alias permanentemente ao shell bash em sistemas Linux e semelhantes ao Unix.

Abra o Terminal e digite os seguintes comandos:
Edite o arquivo ~ / .bash_aliases ou ~ / .bashrc usando qualquer editor de texto como o nano, vim ou gedit

```sh
nano ~/.bashrc
```
Anexe seu alias de bash por exemplo, `alias update = 'sudo apt-get update'`.

##Exemplo
vamos criar alguns alias

```sh
$ nano ~/.bash_aliases

update='sudo -- sh -c "apt update && apt upgrade"'

please='sudo'

desliga='shutdown now'
```
Salve e feche o arquivo.

## Agora é necessario fazer um load do alias
Todos os novos alias estarão disponíveis na próxima vez que você fizer o login usando uma nova sessão no terminal. Para carregar as alterações imediatamente, digite o seguinte:

```sh
$ source ~/.bash_aliases
```
ou 
```sh
$ source ~/.bashrc
```

## Prontinho

Prontinho agora seus alias estão prontos para serem usados no terminal. 
Este tutorial mostrou como criar e adicionar um alias permanentemente ao shell bash em sistemas Linux e semelhantes ao Unix.