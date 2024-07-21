import mongoose from "mongoose";


const stocksSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });


const StocksModel = mongoose.model("stock", stocksSchema);

export default StocksModel;