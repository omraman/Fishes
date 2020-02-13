const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fishesRoutes = require("./routes/fishes");    // Here we are importing Fishes Routes file.
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("tiny"));    // Using a predefined format string of morgan
app.use("/fishes", fishesRoutes);   // Creating routes for the fishes routes 

/* Here we are setting the message and error status for new errors 
app.use( (req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
*/
/* Here we are setti
if(app.get("env") === "development"){
    app.use((err, req, res, next) => {
        res.send({ message: err.message, error: err });
    });
}
*/

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Application is running on http://localhost:${PORT}`);
});