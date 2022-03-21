<h1 align="center">
    <img alt="PopMovies" title="Popmovies" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-running the project">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000">
</p>

---
## 🚀 Technologies

This project was developed with:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Typeorm](https://typeorm.io/#/)
- [Jest](https://jestjs.io/)

## Requirements

- [NodeJS](https://nodejs.org/)
- [NPM](https://npmjs.org/) or [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Install

    $ git clone https://github.com/ericksebadelhe/popmovies-api
    $ cd popmovies-api
    $ yarn

## Running the project

To run the project you need to start Docker on your pc.

With Docker running, you need to run the migrations. Just open terminal and run the command:

    $ yarn typeorm migration:run

To start the project just run:

    $ docker-compose up
