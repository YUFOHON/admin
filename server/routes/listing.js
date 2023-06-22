import express from "express";
import { MongoClient } from "mongodb";

const router = express.Router();

const MONGO_URL_BRUCEBNB = "mongodb+srv://YUFOHON:Rr664798202@cluster0.yysfltf.mongodb.net/?retryWrites=true&w=majority";

router.get("/listings", async (req, res) => {
  try {
    const client = await MongoClient.connect(MONGO_URL_BRUCEBNB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");

    const db = client.db("test");
    const ListingCollection = db.collection("Listing");

    const listings = await ListingCollection.find({}).toArray();

    res.status(200).json(listings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;