import React from 'react';
import { Event, LocalOffer} from '@material-ui/icons';
import Photos from '../Photos/Photos';
import s from './EventCard.module.scss';
import EventControls from '../EventControls/EventControls';

function EventCard(props) {

    return (
        <div className={s.event}>
            <EventControls price={props.price}/>
            <div className={s.info}>
                <h4>{ props.name }</h4>
                <div className={s.price}><LocalOffer />{ props.price }</div>
                <p className={s.description}>{ props.description }</p>
                <div className={s.small_text}>{ props.category.join(',') } </div>
                <div className={s.small_text}>
                    <Event />
                    { props.dates.join('-') }
                </div>
            </div>
            <Photos photos={props.images}/>
        </div>
  );
}

export default EventCard;
