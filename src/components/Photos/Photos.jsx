import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Photos.scss';

function EventInfo(props) {
    return (
        <div className="photo" >
            <Carousel>
                { props.photos.map(src => <div key={new Date()}><img src={src}/></div>)}
            </Carousel>
            { props.popular && <div className="popular">popular</div> }
            <img src={props.photos[0]} alt="activity"/>
        </div>
  );
}

export default EventInfo;
