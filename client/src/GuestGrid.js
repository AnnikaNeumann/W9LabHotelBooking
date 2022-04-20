import GuestCard from "./GuestCard";
import './App.css';

const GuestGrid = ({bookings, removeBooking}) => {
    const guestList = bookings.map((b) => {
        return <GuestCard bookings={b} key={b._id} removeBooking={removeBooking} />
    });

    return(
        <div className="GuestGrid">
    <>
        {guestList}
    </>
    </div>
);


}

export default GuestGrid;