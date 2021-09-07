import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
function WeatherCard() {
    const placedata = useSelector(state => state.placedata);
    console.log(placedata);
    var objToday = new Date(),
        weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        dayOfWeek = weekday[objToday.getDay()],
        dayOfMonth =
            today + (objToday.getDate() < 10)
                ? "0" + objToday.getDate()
                : objToday.getDate(),
        months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        curMonth = months[objToday.getMonth()];
    var today = dayOfWeek + ", " + dayOfMonth + " " + curMonth;

    return (
        <div className="container my-3">
            <div className="row">
                <div className="offset-md-3 col-12 col-md-6 weather rounded bg-secondary text-white  p-4 shadow">
                    {placedata.location ? (
                        <div>
                            <div className="container p-2">
                                <h1><i className="fa fa-map-marker"></i> {placedata.location.name}</h1>
                                <img src={placedata.current.condition.icon} alt="" />
                                <h5>{placedata.current.temp_c}°,{placedata.current.condition.text}</h5>
                                <h6>{today}</h6>
                            </div>
                            <div className="container p-2">
                                <div className="row">
                                    <div className="col border rounded m-1 p-2">
                                        <h5> {placedata.current.wind_kph}km/h</h5>
                                        <h6>Wind</h6>
                                    </div>
                                    <div className="col col border rounded m-1 p-2">
                                        <h5>{placedata.current.humidity}%</h5>
                                        <h6>Humidity</h6>
                                    </div>
                                    <div className="col col border rounded m-1 p-2">
                                        <h5>{placedata.current.precip_mm}mm</h5>
                                        <h6>Precipitation</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>{placedata.error ? placedata.error.message : "Location not found"}</>
                    )}
                </div>
            </div>
        </div >
    );
}

export default WeatherCard;
