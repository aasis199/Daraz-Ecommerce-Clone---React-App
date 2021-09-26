import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Categories from '../Categories/Categories';


export default function SliderContainer() {
    return (
      <div className="position-relative gradient conta">
        <Container>
            <Categories />
            <Carousel className="position-absolute carousel" id="sampleSlide" controls={false}> 
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://icms-image.slatic.net/images/ims-web/fc6400ee-adbb-4a70-a9fb-a1e39863142b.jpg_1200x1200.jpg"
                  alt="First slide"
                />
                 </Carousel.Item>
                 <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://icms-image.slatic.net/images/ims-web/073ef648-2a9e-4e27-a464-61231c45a03e.jpg"
                  alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://icms-image.slatic.net/images/ims-web/a84732f8-d2c7-46f2-838d-92a8829cac3a.jpg"
                  alt="First slide"
                />
                </Carousel.Item>
                
            </Carousel>
            </Container>
      </div>
    )
}
