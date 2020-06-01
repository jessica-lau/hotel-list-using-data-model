import React from "react";
import FiltersList from "./Filters/index";
//TODO: import the data model for your list of filters
import { filters } from "./data.js";

var App = () => (
    <div className="App">
        {/* TODO: pass your data model as a prop to your Filters component */}
        <FiltersList Filters={filters} />
    </div>
);

export default App;
