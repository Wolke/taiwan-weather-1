const fetch = require(`node-fetch`);
(async () => {
  let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-54CE94C0-CD43-4ACE-B567-72C5FFBF5C2A&locationName=%E5%98%89%E7%BE%A9%E5%B8%82`;
  let response = await fetch(url);
  let data = await response.json();
  // console.log(JSON.stringify(data));
})();

module.exports = async (key, city) => {
  let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${key}&locationName=${encodeURI(
    city
  )}`;
  let response = await fetch(url);
  let data = await response.json();
  let { weatherElement } = data.records.location[0];
  let [Wx, PoP, MinT, CI, MaxT] = weatherElement.map((i) => {
    return i.time[0].parameter.parameterName;
  });
  return {
    city,
    degree: {
      min: MinT,
      max: MaxT
    },
    weather: Wx,
    feeling: CI,
    chance: PoP
  };
};
