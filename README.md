<h1 align="center">
	<br>
	<img src="media/header-image.png" alt="header-image">
	<br>
	<br>
	<br>
</h1>

[![Build Status](https://travis-ci.org/yeskunall/utils.time.svg?branch=master)](https://travis-ci.org/yeskunall/utils.time) [![npm](https://img.shields.io/npm/dt/utils.time.svg)](http://npm.im/utils.time) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> ⌚ Micro library to make working with `milliseconds` easier.

<br>
If you have ever written something like this

```js
const ONE_DAY = 1000 * 60 * 60 * 24;
```

... then this micro library is made just for you.

## Install

```
$ npm install --save utils.time
```

## Usage

ES6+ way

```js
import { seconds } from 'utils.time';

seconds(3);
//=> 3000
```

Pre-ES6 way

```js
const { seconds } = require('utils.time');

seconds(3);
//=> 3000
```

## Motivation

Too often, I saw myself writing code that resembled something like this

```js
const ONE_SECOND = 1000;
let twentyFourHours = ONE_SECOND * 60 * 60 * 24;

const fn = () {
  // some code that runs every 24 hours
};

setInterval(fn, twentyFourHours);
```

... and not just in one place, but in several places. At some point, I would just extract all these constants either at the top-level of the module, or just create a small module itself. What you're seeing is the result of the small module I'd end up using in other projects.

**NOTE**: I'm aware of the awesome library by zeit ([`ms`](https://github.com/zeit/ms)), but I felt like it did way more than I needed it to, which is why I decided to publish my version of it. Once again, to reiterate, [`ms`](https://github.com/zeit/ms) is great, but I just needed something smaller.
