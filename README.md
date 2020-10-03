# TypeScript Project Template
A TypeScript project template all set up with a build system, testing framework etc.

## Overview
I got pretty tired of setting up my preferred TypeScript dev stack every time I start a new project, so I put this repo together. Also I really want to try out GitHub's template repository feature.

## Components
This project template is set up and ready to go with:

* The [Gulp](https://gulpjs.com/) streaming build system.
* Testing that uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
* The [TypeDoc](http://typedoc.org/) documentation generator.
* Obviously, the [TypeScript](https://www.typescriptlang.org/) compiler.

## Usage
This project will allow you to build, test and document some example code straight away.

### Prerequisites
You'll need to be set up with [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). You probably also want to set up [Gulp](https://gulpjs.com/) globally so you can just type `gulp` on the command line to build etc. Briefly, you probably want to do one of these:

```bash
npm install --global gulp-cli
```

Don't forget to run an `npm install` to get your `node_modules` directory set up initially.

### Building
Building is handled via Gulp.

```bash
gulp build
```

You can also run the following before the above if you'd like to run a clean build:

```bash
gulp clean
```

### Generating Docs
Documentation generation is handled via Gulp.

```bash
gulp docs
```

### Running Tests
Running tests is currently *not* handled via Gulp, but npm. I just kept tripping over the tooling and things worked out easier this way.

```bash
npm test
```

All of the above should run out of the box, because there's some sample code in there already.

## Watch Tasks
There is a watch task included in the gulpfile, which will trigger whenever a `*.ts` file in `/src` or any of its subdirectories is modified. Run this while you're developing your code:

```bash
gulp watch
```

## Acknowledgements
The maintainers of all the tooling used in this project deserve serious props for building some amazing software.
