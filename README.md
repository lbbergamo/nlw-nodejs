<h2 align="center">Projeto de Estudo - NodeJs</h2>
<h3 align="center">NLW/Together</h3>

<center>

[![Latest Stable Version](https://img.shields.io/npm/v/yarn.svg)](https://www.npmjs.com/package/yarn)
![GitHub Repo stars](https://img.shields.io/github/stars/lbbergamo/nlw-nodejs?style=social)
![GitHub forks](https://img.shields.io/github/forks/lbbergamo/nlw-nodejs?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/lbbergamo/nlw-nodejs?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/lbbergamo/nlw-nodejs)
![GitHub top language](https://img.shields.io/github/languages/top/lbbergamo/nlw-nodejs)

</center>


## :memo: Regras
- Cadastro de usuário

    [ ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

    [ ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

    [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome

    [ ] Não é permitido cadastrar tag sem nome

    [ ] Não é permitido o cadastro por usuário que não sejam administradores

- Cadastro de elogios

    [ ] Não é permitido um usuário cadastrar um elogio para si

    [ ] Não é permitido cadastrar elogio para usuário inválidos

    [ ] O usuário precisa estar autenticado na aplicação

## :paperclip: Download do projeto
```bash
# Clone este repositório

# Sem ssh
$ git clone https://github.com/lbbergamo/nlw-nodejs

# Com ssh 
$ git clone git@github.com:lbbergamo/nlw-nodejs.git
```

## :computer: Iniciando o projeto
```bash
# Navegue até ele e instale todas as dependências
$ npm install

# Inicie o modo de desenvolvimento
$ npm run dev
```

## :memo: Scripts
```bash
# Inicia a aplicação em modo de desenvolvimento
$ npm run dev

# Inicie a aplicação em modo de produção
$ npm start

# Roda os arquivos de testes
$ npm test

# Inicie as migrations
$ npm run typeorm migrations:run

# Remova as migration
$ npm run typeorm migrations:revert
```