# Maroon Project

![Maroon Logo](src/assets/images/logo.avif)

Maroon is a modern web application project built with React and Redux, featuring a variety of tools and libraries for efficient development.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
  - [Main Dependencies](#main-dependencies)
  - [Development Dependencies](#development-dependencies)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Testing](#testing)
- [Storybook](#storybook)
- [JSON Server](#json-server)
- [Build](#build)

## Getting Started

### Prerequisites

- `Node.js`: v18.2.0 or later
- `npm`: v7.0.0 or later

### Installation
Clone the repository:

```bash
git clone https://github.com/TeleginDmitry/Maroon.git
cd maroon
npm install
```

# Project Structure
## The project structure follows a typical React application structure, with additional configuration files for linting, testing, and other development tools. Key folders and files include:

- `src/`: Contains the main source code of the application.
- `public/`: Contains static assets and the index.html file.
- `storybook/`: Configuration and stories for Storybook.
- `database/`: JSON files for JSON Server.

## Dependencies
### Main Dependencies
- `@pbe/react-yandex-maps`: Integration of Yandex Maps into React components.
- `@reduxjs/toolkit`: The official, opinionated, batteries-included toolset for efficient Redux development.
- `@tabler/icons-react`: A set of beautiful and accessible SVG icons for web projects.
- `@tanstack/react-query`: Data fetching library for React.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `formik`: Form library for React and React Native.
- `framer-motion`: Animation library for React.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.
- `react-draggable`: Draggable library for React.
- `react-intersection-observer`: React component for the Intersection Observer API.
- `react-redux`: Official React bindings for Redux.
- `react-router-dom`: Declarative routing for React.js.
- `typescript`: Superset of JavaScript that adds static types to the language.
- `yup`: JavaScript schema builder for value parsing and validation.


### Development Dependencies
- `@babel/plugin-proposal-private-property-in-object`: Babel plugin for private property syntax.
- `@storybook`: Development environment for UI components.
- `@types`: TypeScript type definitions for various libraries.
- `eslint`: A pluggable and configurable linter tool for identifying and fixing problems in JavaScript code.
- `jest`: Delightful JavaScript Testing.
- `prettier`: Opinionated code formatter.
- `stylelint`: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- `webpack`: A module bundler for JavaScript applications.
## Scripts
- `start`: Start the development server.
- `build`: Build the production-ready application.
- `test`: Run tests using Jest.
- `eject`: Eject from Create React App configuration.
- `format`: Format code using Prettier.
- `lint`: Run ESLint on the project files.
- `lint:fix`: Run ESLint and automatically fix fixable issues.
- `stylelint`: Run stylelint on the project styles.
- `stylelint:fix`: Run stylelint and automatically fix fixable issues.
- `serve`: Start JSON Server to simulate a REST API.
- `storybook`: Start Storybook in development mode.
- `build-storybook`: Build the Storybook for production.

## Linting and Formatting
### This project uses ESLint for JavaScript/TypeScript linting and Prettier for code formatting. Run the following scripts to maintain code quality

```bash
npm run lint
npm run lint:fix
npm run format
```

## Testing
[Jest](https://jestjs.io/) is used for testing. Run the following script to execute tests

```bash
npm test
```

## Storybook
[Storybook](https://storybook.js.org/) is integrated for component development and documentation. Run the following script to start Storybook

```bash
npm run storybook
```


## JSON Server
[JSON Server](https://github.com/typicode/json-server) is included for mocking a REST API during development. Start the server using

```bash
npm run serve
```

## Build
Build the production-ready application using

```bash
npm run build
```

The build artifacts will be available in the build/ directory.
