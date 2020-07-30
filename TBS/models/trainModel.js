import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const schema = mongoose.Schema

const trainSchema = new schema({
    trainName:{
        type:String,
        unique:true,
        required:true
    },
    origin:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    travelDistance:{
        type:Number,
        required:true
    },
    arrival:{
        type:String,
        required:true
    },
    departure:{
        type:String,
        required:true
    },
    vacantSeats:{
        type:Number

    },
    trainNumber:{
        type:Number,
        required:true,
        unique:true
    },
    class:{
        type:String,
        required:true

    },
    pricePerKm:{
        type:Number,
        required:true
    },
    totalFare:{
        type:Number
    }
})

trainSchema.plugin(uniqueValidator)

module.exports=mongoose.model('train',trainSchema)