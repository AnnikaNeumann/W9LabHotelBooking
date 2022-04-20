import { deleteHotel_bookings } from "./GuestService";
import './GuestCard.css';


const GuestCard = ({bookings, removeBooking}) => {

    console.log(bookings);
    const handleDelete = () => {
        deleteHotel_bookings(bookings._id).then(()=>{
            removeBooking(bookings._id);
        })
    }


    return(
        <div className="guestCard">
        <>
        <h2>Guest Details</h2>
        <p>Full Name: {bookings.name}</p>
        <p>Email: {bookings.email}</p>
        <p>Checked In: {bookings.checkInStatus}</p>
        <button onClick={handleDelete}> 🗑 </button>
        <hr></hr>
        </>
       </div>
    )
};

export default GuestCard;
