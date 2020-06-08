import React from 'react';
import {hotels} from "../data.js";


var getMatchCount = filterKey =>
    hotels.filter(hotel => hotel[filterKey]).length;
/* functional component
    - accepts the data model for a single filter as a prop
    - uses that data to render the UI for a single filter in the list
*/
var Filter = props => {
    /* it is not enough to just call props.toggleFilter when the input 
    is clicked, we need to call props.toggleFilter with an argument 
    that indicates WHICH input has been clicked, so we create this
    onChange function here for each Filter component that is rendered */
    var onChange = () => props.toggleFilter(props.filter.key);
    var matchCount = getMatchCount(props.filter.key);
    return (
        <li className="filter">
            <span>
                <input
                    type="checkbox"
                    checked={props.isChecked}
                    onChange={onChange}
                    className="filter__checkbox"
                />
                {props.filter.display}
            </span>
            <span className="filter__match-count">{matchCount}</span>
        </li>
    );
};

export default Filter;
