const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://20245744_db_user:rIzYvqK5hPFAHNpG@cluster0.7y8qejn.mongodb.net/appName=Cluster0/apptech?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(console.error);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://20245744_db_user:rIzYvqK5hPFAHNpG@cluster0.7y8qejn.mongodb.net/appName=Cluster0/apptech?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(console.error);
