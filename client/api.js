import request from "superagent";

const nasaUrl = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";

export function getNasa() {
  console.log("request");
  return request.get(nasaUrl).then(res => {
    return res.body;
  });
}
