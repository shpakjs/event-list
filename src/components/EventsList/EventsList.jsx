import React, { useState } from 'react';
import Event from '../EventCard/EventCard';
import Filters from '../Filters/Filters';

import s from './EventsList';

function EventsList(props) {
    const [events, setEvents] = useState(Object.values(props.events));

    const changeFilters = ({category, popularity}) => {
        let filteredArr = Object.values(props.events)
            .filter( event => {
                if(category){
                    return popularity 
                        ? event.popular && event.category.includes(category)
                        : event.category.includes(category);
                }
                return popularity ? event.popular : event;
                    
            });
        setEvents(filteredArr);
    }
    return (
        <div className={s.events_list}>
            <Filters changeFilters={changeFilters}/>
            {
                events.map( event => {
                    return <Event key={event.id} {...event} />
                })
            }
            
        </div>
    );
}

export default EventsList;
