# taiwan-weather-1

[![npm version](https://badge.fury.io/js/taiwan-weather-1.svg)](https://badge.fury.io/js/taiwan-weather-1)

## Installation

```bash
npm install --save taiwan-weather-1
```

##​​ Requirements

首先申請中央氣象局 open data 的帳號並得授權碼

## Sample Code

```js
const TaiwanWeather = require(`taiwan-weather-1`);
(async () => {
  let data = await TaiwanWeather(授權碼, `新北市`); //`新北市` 可以換成其他中央氣象局授受的城市名稱

  console.log(data);
})();
```

# License

The MIT license
