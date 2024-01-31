import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    uaeLiscence: {
      type: String,
      required: true,
    },
    homeCountryLiscence: {
      type: String,
    },
    emirateOfRegistration: {
      type: String,
      required: true,
    },
    yearOfRegistration: {
      type: String,
      required: true,
    },
    vehicleMake: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    insurance: {
      type: String,
      required: true,
    },
    isReplied: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Quote = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);

export default Quote;
