
const express = require('express');
const app = express();


let data = [];


app.get('/search', (req, res) => {
    const { num, org, dst, date } = req.query;
    const arr = [];

    data.map(f => {
        const d = f['departure'].split('T')[0];
        if (d === date) {
            const n = f['flightNumber'];
            const o = f['origin'];
            const d = f['destination'];
            if ((n === num) || (o === org && d === dst)) {
                arr.push(f);
            }
        }  
    })

    res.send(arr);
});


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    // write the Json data
    data = require('./flight-docs/flight-sample.json');
});