import mongoose  from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
const Purchase_schema =new mongoose.Schema({

    userId:{type:ObjectId},
    creatorId:{type:ObjectId}

})

const Purchase =mongoose.model("Purchase",Purchase_schema)
export default Purchase