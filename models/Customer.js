import mongoose from "mongoose";


const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    address: {
      type: String,
    },
    gstin:{
      type: String,
      required: true,
    },
    phoneNumber: {
      type:String ,
    },
    elastics:[{
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "Elastic"
      },
    }]
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
