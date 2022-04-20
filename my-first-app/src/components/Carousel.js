import React from 'react'
import {Carousel as Carousel1} from 'react-bootstrap'
import ImagesForSlider from './ImagesForSlider'




export default function Carousel() {
  return (
    <div>
        <Carousel1>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img1}
      alt="First slide"
    />
  </Carousel1.Item>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img2}
      alt="Second slide"
    />
  </Carousel1.Item>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img3}
      alt="Third slide"
    />
  </Carousel1.Item>
  <Carousel1.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img4}
      alt="Third slide"
    />
  </Carousel1.Item>
</Carousel1>
    </div>
  )
}
