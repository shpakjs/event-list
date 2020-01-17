import React, { useState } from 'react';
import Photos from '../Photos/Photos';
import './EventCard.scss';
import EventControls from '../EventControls/EventControls';

function EventCard(props) {
    let [isCollapsed, setExtended] = useState(true);

    return (
        <div className="event">
            <EventControls price={props.price}/>
            <div className="info">
                { props.popular && <div className="popular">popular</div> }
                <h4>{ props.name }</h4>
                <div>
                    <i className="material-icons md-18">monetization_on</i>
                    { props.price }
                </div>
                <div className="description">{ isCollapsed && props.description.length > 200
                    ?  <>{props.description.slice(0,200)}<div onClick={() => setExtended(!isCollapsed)} className="small_text">+read more</div></>
                    : props.description}
                </div>
                <div className="small_text additional">
                    <i className="material-icons md-18">event</i>
                    { props.dates.join('-') }
                </div>
                <div className="small_text additional">{ props.category.join(',') } </div>
            </div>
            <Photos photos={props.images}/>
        </div>
  );
}

export default EventCard;
