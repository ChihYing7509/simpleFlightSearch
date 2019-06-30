
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000
let data = [];

app.use(bodyParser.json());

// 1. CORS Middleware 
/* app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    next();
});
 */

 // 2. CORS Middleware 
app.use(cors());

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


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    // write the Json data
    data = require('./flight-docs/flight-sample.json');
});