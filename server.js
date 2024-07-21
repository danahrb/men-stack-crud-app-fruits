// Here is where we import modules
// We begin by loading Express
const express = require("express");

const app = express();

//middleware  to shows the status of the process
const morgan = require("morgan");
app.use(morgan('dev'))


//ROUTES

//Landing 

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });





app.listen(3000, () => {
  console.log("Listening on port 3000");
});