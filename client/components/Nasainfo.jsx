import React from "react";

function nasaInfo(props) {
  let nasaInfo = props.nasaInfo;
  console.log("prop :", nasaInfo);
  let nasaTitles = nasaInfo.events.map(event => {
    return event.title;
  });
  console.log(nasaTitles);

  return (
    <div>
      <ul>{nasaTitles}</ul>
    </div>
  );
}

export default nasaInfo;
