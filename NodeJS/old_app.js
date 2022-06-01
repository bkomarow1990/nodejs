//import  {events}  from './events.js';
//const { application } = require('express');

// server logic
const hostname = 'localhost'; 
const port = 3400;

const events_ = require('events');
const express = require('express'), app = express();
//const app = express();
app.get("/api/events", (req, res) => {
    res.status(200).type('json');
    console.log(events_[0]);
    res.json(events_[0]);
});
app.use((req, res, next) => {
    res.status(404).type('text').send('Not Found');
})
app.listen(port, hostname, () => {
    console.log(`Server is listening ${hostname}:${port}`);
});