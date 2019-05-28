var express = require("express"),
  routes = require("./routes"),
  user = require("./routes/user"),
  path = require("path");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", routes.index);
app.get("/users", user.list);

if (!module.parent) {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Express server listening on port " + port + ".");
  });
}
