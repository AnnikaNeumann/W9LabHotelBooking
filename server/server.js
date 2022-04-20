const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://0.0.0.0:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('guests');
    const hotel_bookingsCollection = db.collection('hotel_bookings');
    const hotel_bookingsRouter = createRouter(hotel_bookingsCollection);
    app.use('/api/hotel_bookings', hotel_bookingsRouter);
  })
  .catch(console.err);



app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
