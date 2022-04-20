use guests;
db.DropDatabase();

db.hotel_bookings.insertMany([
    {
        name: "Sofia",
        email: "sofia@gmail.com",
        checkInStatus: false
    },
    {
        name: "Annika",
        email: "annika@gmail.com",
        checkInStatus: true
    },
]);