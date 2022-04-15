import React from 'react'
import {Carousel as carousel } from 'react-bootstrap'
import ImagesForSlider from './ImagesForSlider'

export default function Carousel() {
  return (
    <div>
        <carousel>
  <carousel.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img1}
      alt="First slide"
    />
    <carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </carousel.Caption>
  </carousel.Item>
  <carousel.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img2}
      alt="Second slide"
    />

    <carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </carousel.Caption>
  </carousel.Item>
  <carousel.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img3}
      alt="Third slide"
    />

    <carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </carousel.Caption>
  </carousel.Item>
  <carousel.Item>
    <img
      className="d-block w-100"
      src={ImagesForSlider.img4}
      alt="Third slide"
    />

    <carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </carousel.Caption>
  </carousel.Item>
</carousel>
    </div>
  )
}
