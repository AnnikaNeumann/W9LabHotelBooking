import {useState} from "react";
import { postHotel_bookings } from "./GuestService";

const GuestForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({})
    

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postHotel_bookings(formData).then((data)=>{
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="guest-form" >
            <h2>Add a Guest</h2>
            <div className="guest">
                <label htmlFor="name">Full Name:</label>
                <input onChange={onChange} type="text" id="name"  />
            </div>
            <div className="guest">
                <label htmlFor="email address">Email:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>
            <div className="guest">
                <label htmlFor="checkInStatus">Checked In:</label>
                <input onChange={onChange} type="checkbox" id="checkInStatus"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default GuestForm;