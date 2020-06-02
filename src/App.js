import React from "react";
import Hotels from "./Hotels";
import Filters from "./Filters";
import { filters, hotels } from "./data.js";

var App = () => (
    <div className="App">
        <Filters filters={filters} />
        <Hotels hotels={hotels} />
    </div>
);

export default App;
