import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlace } from '../store/actions';
import { updatePlaceData } from '../store/actions';
const PlaceForm = () => {
    const place = useSelector(state => state.place);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container my-3">
                <div class="input-group ">
                    <input type="text" value={place} placeholder="Enter your city name" onChange={(e) => dispatch(updatePlace(e.target.value))} class="form-control" aria-describedby="basic-addon2" />
                    <button type="button" class="btn btn-outline-dark input-group-text" id="basic-addon2" onClick={() => { dispatch(updatePlaceData(place)); }} >Search</button>
                </div>
            </div >

        </>
    );
};

export default PlaceForm;
