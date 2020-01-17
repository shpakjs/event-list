import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Photos.scss';

function EventInfo(props) {
    let [isModalOpened, setModalOpened] = useState(false);

    return (
        <div className="photo" >
            <div className={`modal-wrapper ${isModalOpened ? 'opened': ''}`}>
                <div className="modal" >
                    <i className="material-icons md-36" onClick={() => setModalOpened(false)} >close</i>
                    <Carousel>
                        { isModalOpened && props.photos.map(src => <div key={new Date()}><img src={src}/></div>)}
                    </Carousel>
                </div>
            </div>
            <img className="cover" src={props.photos[0]} alt="activity" onClick={() => setModalOpened(true)}/>
        </div>
  );
}

export default EventInfo;
