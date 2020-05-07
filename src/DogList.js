import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-3 text-center my-4">Dog List!</h1>

        <div className="row">
          {this.props.dogs.map((d) => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
              <Link to={`/dogs/${d.name}`}>
                <img src={d.src} alt={d.name} />
                <h3 className="underline mt-3">{d.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
