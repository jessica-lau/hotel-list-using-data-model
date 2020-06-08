import React from "react";
import Hotel from "./Hotel.js";
// TODO: import functional component from the Hotel.js module
import { hotels } from "../data.js";
/* callback function
  - renders a single hotel
  - assigns a unique `key` prop to each `Hotel` component
  - passes the `hotel` argument to each `Hotel` component as a prop called `hotel`
*/
// TODO write this callback function
var renderHotel = hotel => <Hotel key={hotel.id} hotel={hotel} />;

/* functional component
  - accepts `hotels` data model as a prop
  - maps over the array of hotel data, calling the `renderHotel` callback function to render a `Hotel` component for each item in the array
*/
var HotelsList = props => {
  /* see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to learn how the .filter array method works

see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every to learn how the .every array method works
*/
  var filterCallback = hotel => {
    var everyCallback = filter => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  };
  var filteredHotels = hotels.filter(filterCallback);
  // TODO: map over array using callback function to render each hotel
  // TODO: add the variable storing our list of JSX elements between the ul tags below!
  var hotelsListElements = filteredHotels.map(renderHotel);
  return <ul className="hotels-list">{hotelsListElements}</ul>;
};

export default HotelsList;