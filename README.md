<h1 align="center">
	<br>
	<img src="media/header-image.png" alt="header-image">
	<br>
	<br>
	<br>
</h1>

[![Build Status](https://travis-ci.org/yeskunall/utils.time.svg?branch=master)](https://travis-ci.org/yeskunall/utils.time) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> ⌚ Micro library that makes time calculations simpler.

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
