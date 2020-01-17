import React, { useState } from 'react';
import Event from '../EventCard/EventCard';
import Filters from '../Filters/Filters';

import './EventsList.scss';

function EventsList(props) {
    const [events, setEvents] = useState(Object.values(props.events));
    const [eventsShowed, setEventsShowed] = useState(2);

    const changeFilters = ({category, popularity, ascedingPrice, eventsShowed}) => {
        let filteredArr = Object.values(props.events)
            .filter( event => {
                if(category){
                    return popularity 
                        ? event.popular && event.category.includes(category)
                        : event.category.includes(category);
                }
                return popularity ? event.popular : event;
            });
        let sortedArr = filteredArr.sort((eventA, eventB) => {
            return ascedingPrice === "true" ? eventA.price - eventB.price :  eventB.price - eventA.price;
        });

        setEvents(sortedArr);
    }
    return (
        <div className="events_list">
            <Filters changeFilters={changeFilters} events = {Object.values(props.events)}/>
            {
                events.slice(0, eventsShowed).map( event => {
                    return <Event key={event.id} {...event} />
                })
            }
            <span>Showed {eventsShowed > events.length ? events.length : eventsShowed} of { events.length } activities</span>
            { eventsShowed < events.length && <button className="more" onClick={() => setEventsShowed(eventsShowed + 1)}>Show more</button> }
        </div>
    );
}

export default EventsList;
