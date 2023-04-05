import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import axios from "axios";
import { ISlide } from "../../models/slider.model";

const Slider = () => {
  const [slider, setSlider] = useState<ISlide[] | []>([]);

  const getAllSlides = async () => {
    try {
      const { data } = await axios.get<ISlide[]>(
        "http://localhost:5000/api/slider"
      );

      if (data) {
        setSlider(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllSlides();
  }, []);

  console.log(slider);

  return (
    <div>
      {slider?.map((slide: ISlide) => (
        <div key={slide.id}>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <img src={slide.image} alt="" />
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default Slider;
