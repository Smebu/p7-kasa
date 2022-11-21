import React from "react";
import { useState } from "react";
import { ReactComponent as ArrowLeft} from "./arrowleft.svg";
import { ReactComponent as ArrowRight} from "./arrowright.svg";


function Slideshow(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const arrayLenght = props.pictures.flatMap(el => el.pictures).length;

  function prevSlide() {
    let newSlide = currentSlide === 0 ? arrayLenght - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }
  function nextSlide() {
    let newSlide = currentSlide === arrayLenght - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }
  return (
    <section className="slideshow_container">
      <div className="slideshow_navigation">
        <ArrowLeft className="arrow" onClick={() => {prevSlide()}} />
        <ArrowRight className="arrow" onClick={() => {nextSlide()}} />
      </div>
      {props.pictures.map((picture, index) => {
        return (
          <img src={picture} alt="" key={index} className={index === currentSlide ? "slideshow_img" : "hide_img"} />
        )
      })}
      <div className="slideshow_text">{currentSlide + 1}/{props.pictures.length}</div>
    </section>
  )
}

export default Slideshow;
