const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Using CORS middleware
app.use(cors());

const PORT = 5001;

app.get('/timeSeries', (req, res) => {
    console.log("request received")
    const timeframe = req.query.timeframe;
    let dataFile;

    switch(timeframe) {
        case '1M':
            dataFile = '1m-chartData.json';
            break;
        case '6M':
            dataFile = '6m-chartData.json';
            break;
        case '1Y':
            dataFile = '1y-chartData.json';
            break;
        case 'MAX':
        default:
            dataFile = 'max-chartData.json';
            break;
    }
    const file = path.join(__dirname, 'data', dataFile)
    console.log(file)
    res.sendFile(file);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
