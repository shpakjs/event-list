import React, { useState, useEffect } from 'react';
import './Filters.scss';

function Filters(props) {
    const [popularity, setPopularity] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(() => {
        props.changeFilters({popularity, category});
    }, [popularity, category]);

    return (
        <div className="filters">
            <div className="filter">
                <input type="checkbox" id="popular" checked={popularity} onChange={(e) => setPopularity(e.target.checked)} />
                <label htmlFor="popular" >show popular</label>
            </div>
            <select className="filter" value={category} onChange={(e)=> setCategory(e.target.value)} >
                <option value=""></option>
                <option value="family">family</option>
                <option value="music">music</option>
                <option value="concert">concert</option>
                <option value="Sport">sport</option>
                <option value="Football">football</option>
                <option value="Tour">tour</option>
            </select>
        </div>
    );
}

export default Filters;
