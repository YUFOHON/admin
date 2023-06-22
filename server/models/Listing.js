import mongoose from "mongoose";
const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  roomCount: {
    type: Number,
    required: true,
  },
  bedCount: {
    type: Number,
    required: true,
  },
  bathroomCount: {
    type: Number,
    required: true,
  },
  guestCount: {
    type: Number,
    required: true,
  },
  locationValue: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ownerImg: {
    type: String,
    required: true,
  },
});
const db2 = mongoose.createConnection(
  "mongodb+srv://YUFOHON:Rr664798202@cluster0.yysfltf.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Listing = db2.model("Listing", ListingSchema);

export default Listing;
