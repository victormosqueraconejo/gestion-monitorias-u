import { Schema, model } from 'mongoose';


const ShowSchema = new Schema({
    title : { 
        type : String, required : true
    },
    genre : {
        type: String, required : true
    },
    releasedYear: {
        type : Number , required : true
    }

});





export default model('Show', ShowSchema);