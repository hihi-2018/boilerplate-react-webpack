import React from "react";

function nasaLink(props) {
  let nasaLink = props.nasaLink;
  // console.log("prop :", nasaInfo);
  // let nasaLinks = nasaInfo.link.map(event => {

  console.log(nasaLink);

  return (
    <div>
      <ul>{nasaLink}</ul>
    </div>
  );
}
export default nasaLink;
