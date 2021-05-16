import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../asset/slider1.jpg";
import detail from "../asset/detail.jpg";
import '../css/style.css'


const Slider = () => {
    return (
        <main className="container">
            <Carousel >
                <Carousel.Item interval={2000} >
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        width='100%'
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={detail}
                        alt="Second slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={detail}
                        alt="Third slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Slider
