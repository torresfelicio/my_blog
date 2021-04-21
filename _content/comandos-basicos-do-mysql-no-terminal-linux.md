---
title: Comandos Básicos do MySQL no Terminal Linux
date: 2021-04-21T20:37:06.705Z
description: Comandos básicos do MySQL no temrinal linux para facilitar quando você precisa consultar uma tabela.
slug: comandos-basicos-do-mysql-no-terminal-linux
---

Este tutorial mostra comandos básicos do MySQL no terminal linux para facilitar quando você precisa consultar uma tabela ou algo do gênero.

Abra o Terminal e digite os seguintes comandos para conectar no MySQL:

```sh
mysql -u root -p
```
O parâmetro, `-u` indica qual usuário vai realizar a conexão e utilizar e manipular as tabelas e o banco. Já o `root`é o nome do usuário que está sendo utilizado para realizar a conexão, aqui estou utilizando o root mas você pode colocar o usuário de acordo com as suas configurações quando instalou o MySQL.

O parâmetro `-p` indica a senha do nosso usuário para conexão com o banco, se o usuário não ter senha para acessar basta não colocar o `-p`. Você pode também colocar como o exemplo a seguir para ao conectar já utilizar o banco de sua preferencia:

```sh
mysql -u root -p o_nome_do_seu_banco
```

## Agora vamos ao que interessa

Digite o comando abaixo para visualizar os bancos que você tem:

```sh
show databases;
```


| Database           |
| ------ |
| information_schema |
| dev_bd             |
| my_work            |
| mysql              |
| performance_schema |
| teste_bd           |
| sys                |
|                    |

Se existir apenas as informações `information_schema` `performance_schema` `sys` digite `create database nomeDoSeuBanco;` e em seguida digite `show databases;`, agora sim você pode ver seu novo banco criado.

| Database           |
| ------ |
| information_schema |
| dev_bd             |
| my_work            |
| mysql              |
| performance_schema |
| teste_bd           |
| sys                |
| nomeDoSeuBancoNovo |

## Lista de comandos

| Comando | O que ele faz |
| ------ | ------ |
| show tables; | [Exibe todas as tabelas] |
| describe nome_tabela; | [Exibe a estrutura dessa tabela] |
| drop table  nome_tabela; | [deleta a tabela] |
| drop database nome_do_banco; | [deleta o banco] |
| ctrl+l; | [limpa o terminal] |
| ctrl+l; | [limpa o terminal] |

# Outros comandos básicos

```sh
CREATE TABLE `nome_da_sua_base_de_dados`.`nome_da_tabela` (
    `id` INT (11) NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR (255),
    `texto` TEXT,
    `idade` INT (11),
    `data` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
    PRIMARY KEY (`id`)
) CHARSET = utf8 ;
```

O comando acima cria uma tabela, note que você pode mudar os nomes `id`, `nome`, `texto`.... pelo nome que você precisar de a cordo com a estrutura que você necessita.

### Criar um dump

```sh
mysqldump -u root -p database_nome > database_nome_backup.sql;
```
### Importar um Dump

```sh
mysql -u root -p database_name < database_name.sql;
```

## Conclusão 

O ponto aqui é que pelo terminal você pode realizar todos os comandos existentes no mysql, quando você precisar realizar apenas uma consulta simples ou verificar algo rapidamente você pode utilizar o terminal sem problemas agora 😀. 
