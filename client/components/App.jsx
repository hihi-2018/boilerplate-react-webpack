import React from "react";
import { getNasa } from "../api.js";
import Nasainfo from "./Nasainfo";
import NasaLink from "./NasaLink";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nasaInfo: { events: [] },
      nasaLink: ""
    };
  }
  componentDidMount() {
    getNasa().then(nasaInfo => {
      console.log(nasaInfo);
      // console.log(nasaLink);

      this.setState({
        nasaInfo: nasaInfo,
        nasaLink: nasaInfo.link
      });
    });
  }

  render() {
    return (
      <div>
        <h1>React development has begun!</h1>
        <ul>
          <li>{this.state.nasaInfo && this.state.nasaInfo.description}</li>
          <li>
            <Nasainfo nasaInfo={this.state.nasaInfo} />
          </li>
          <li>
            <NasaLink nasaLink={this.state.nasaLink} />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
