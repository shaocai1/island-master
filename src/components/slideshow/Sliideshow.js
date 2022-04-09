import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshow.css";

class App extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 2000,
      autoplay: true,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>,
    };
    const slideImages = [
      "./zavod1.jpeg",
      "./zavod2.jpeg",
      "./zavod3.jpeg",
      "./zavod4.jpeg",
    ];
    return (
      <div className="App">
        <h3>Наш Завод</h3>
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          {/* <button className="btn" onClick={this.back} type="button">
            Go Back
          </button>
          <button className="btn" onClick={this.next} type="button">
            Go Next
          </button> */}
        </div>
      </div>
    );
  }
}

export default App;
