import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    elastic: {
      type: [
        {
          id: {
            type: mongoose.Types.ObjectId,
            ref: "Elastic",
          },
          quantity: { type: Number,required:true,default:500 },
        },
      ],
      required: true,
    },
    packedElastic: {
      type: [
        {
          id: {
            type: mongoose.Types.ObjectId,
            ref: "Elastic",
          },
          quantity: { type: Number,default:0,required:true },
        },
      ],
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    status: {
      type: String,
      required: true,
      default: "Open",
    },
    jobs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "JobOrder",
        default: [],
      },
    ],
    supplyDate: {
      type: Date,
      required: true,
    },
    orderNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", OrdersSchema);
export default Orders;
