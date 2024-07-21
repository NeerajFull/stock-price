import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { getStocksBulkData } from './externalApi';
import StocksModel from './models';

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI as string;



app.get('/coins/:name', async (req, res) => {
    try {
        const name = req.params.name.toUpperCase();
        const prices = await StocksModel.find({ name }).sort({createdAt: -1}).limit(20);
        return res.status(200).json({ data: prices.reverse(), staus: true });
    } catch (error) {
        return res.status(404).json({ error: error, staus: false });
    }

});



mongoose.connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    getStocksBulkData();
    setInterval(getStocksBulkData, 5000);
});
