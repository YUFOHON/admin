import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import ListingRoutes from "./routes/listing.js";
import UserRoutes from "./routes/user.js";
import Product from "./models/Product.js";
// import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
// import Transaction from "./models/Transaction.js";
import { kpis, products } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/listing", ListingRoutes);
app.use("/user", UserRoutes);
// app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async () => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ADD DATA ONE TIME ONLY OR AS NEEDED */
//     // await mongoose.connection.db.dropDatabase();
//     // Product.insertMany(products);
//     // Transaction.insertMany(transactions);
//   })
//   .catch((error) => console.log(`${error} did not connect`));
// First database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db1 = mongoose.connection;
db1.on("error", console.error.bind(console, "Connection error:"));
db1.once("open", () => {
  console.log("Connected to database 1");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});