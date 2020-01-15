import React, { useState, useEffect } from 'react';

function Filters(props) {
    const [popularity, setPopularity] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(() => {
        props.changeFilters({popularity, category});
    }, [popularity, category]);

    return (
        <div>
            <input type="checkbox" id="popular" checked={popularity} onChange={(e) => setPopularity(e.target.checked)} />
            <label htmlFor="popular" >show popular</label>
            <select value={category} onChange={(e)=> setCategory(e.target.value)} >
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
