import './App.css';
import { useState, useEffect } from "react";
import GuestForm from './GuestForm';
import GuestGrid from './GuestGrid';
import {getHotel_bookings} from "./GuestService";


function App() {

  const [hotelGuest, setHotelGuest] = useState([]);

  useEffect(() =>{
    getHotel_bookings().then((allBookings) =>{
      setHotelGuest(allBookings);
    })

  },[]);


  const addBooking = (booking) =>{
    const temp = hotelGuest.map(g=>g);
    temp.push(booking)
    setHotelGuest(temp);
  }

  const removeBooking = (id) =>{
    const temp = hotelGuest.map(g=>g);
    const indexToDel = temp.map(g =>g._id).indexOf(id);
    temp.splice(indexToDel, 1);
    setHotelGuest(temp)
  }

  

  return (
    <div className='App'>
    <>
    <img className="california" src={require("./images/hotel-california.jpeg")} alt='Hotel California'/>

    <GuestForm addBooking={addBooking}/>
    <GuestGrid bookings ={hotelGuest} removeBooking={removeBooking} />
    </>
    </div>
  );
  }

export default App;
