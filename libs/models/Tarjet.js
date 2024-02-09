import mongoose from "mongoose";

const TarjetSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link:{
        type:String,
        required:true,
    },
    linkb:{
        type:String,
        required:false,
    },
    tags: {
        type: [String],
        default: []
    },
    desc: {
        type: String,
        required: true,
    },
    watched: {
        type: Number,
        required: false,
    }  
},{timestamps:true})

const Tarjet = mongoose.models.Tarjet || mongoose.model("Tarjet", TarjetSchema);

export default Tarjet;