const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const routes = require("./routes");

const Hotel = require("./models").Hotel;
const Room = require("./models").Room;
const db = require("./models").db;

const app = express();
const PORT = 3000;

var env = nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", routes);


// app.get("/", (req, res, next) => {
//   Hotel.findAll()
//     .then((hotels) => {
//       res.status(200).render("index", {hotels: hotels})
//     })
//     .catch(next);
// });

app.use((err, req, res, next) => {
  console.error(err);
});

db.sync({force: true})
  .then(app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  }));

