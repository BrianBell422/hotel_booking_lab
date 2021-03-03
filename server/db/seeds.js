use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Malcolm",
        email: "BikeBro@roadrash.com",
        checkedIn: true
    },
    {
        name: "Harrison",
        email: "MasterOfMoths@flybynight.net",
        checkedIn: false
    }
]);
