var http = require("http");
const TaiwanWeather = require(`./TaiwanWeather.js`);
// (async () => {
//   console.log(`hello`);
//   let data = await TaiwanWeather(process.env.key, `新北市`);
//   console.log(data);
// })();
// //create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
