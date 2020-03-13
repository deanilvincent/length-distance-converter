# Overview
NPM package for metric conversions (Length/distance converter).

## Installation

`npm i length-distance-converter --save`

## Setup & Basic Usage
```
const metricConverter = require('length-distance-converter')

console.log(metricConverter.kmToMiles(12));
// will return value converted from km to miles.
```

## Options
|Functions| Desc.|
|-|-|
|kmToMiles(val) | Kilometers to miles |
|milesToKm(val) | Miles to kilometers |