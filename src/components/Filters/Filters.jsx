import React, { useState, useEffect } from 'react';
import './Filters.scss';

function Filters(props) {
    const [popularity, setPopularity] = useState(false);
    const [category, setCategory] = useState("");
    const [ascedingPrice, setAscedingPrice] = useState("true");
    const categories = new Set(props.events.map(event => event.category).flat());
    
    useEffect(() => {
        props.changeFilters({popularity, category, ascedingPrice});
    }, [popularity, category, ascedingPrice]);

    return (
        <div className="filters">
            <div className="filter">
                <input type="checkbox" id="popular" checked={popularity} onChange={(e) => setPopularity(e.target.checked)} />
                <label htmlFor="popular" >show popular</label>
            </div>
            <div className="filter">
            <label>Category</label>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} >
                    <option value=""></option>
                    { 
                        Array.from(categories).map((category, i) => <option key={i} value={category}>{category}</option>)
                    }
                </select>
            </div>
            <div className="filter">
                <label>Price</label>
                <select value={ascedingPrice} onChange={(e)=> setAscedingPrice(e.target.value)} >
                    <option value="true">Cheapest to expensive</option>
                    <option value="false">Expensive to cheap</option>
                </select>
            </div>
        </div>
    );
}

export default Filters;
