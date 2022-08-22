const { response } = require("express");
const express = require("express");

const app = express();
const port = 8000;

app.set("view engine", "hbs"); //set view engine
app.use("/assets", express.static(__dirname + "/assets")); //patch foldea assets
app.use(express.urlencoded({ extended: false }));

//fungsi menampung data

let dataBlog = [];

app.get("/", function (request, response) {
  response.render("home");
});
app.get("/contact", function (request, response) {
  response.render("contact");
});
//GETTTTTTTT AMBIL DATA
app.get("/blog", function (request, response) {
  console.log(dataBlog);
  response.render("blog", { dataBlog });
});

//GETTTTTTTT MENAMPILKAN DATA
app.post("/blog", function (request, response) {
  //   console.log(request.body);

  let title = request.body.inputTitle;
  let content = request.body.inputContent;

  let blog = {
    title,
    content,
  };

  dataBlog.push(blog);

  response.redirect("/");
});

app.get("/blog-detail/:id", function (request, response) {
  let id = request.params.id;
  console.log(id);

  response.render("blog-detail", {
    id,
    title: "selamat datang",
    content: "lorem ipsumasdasdasd",
    author: "budi aprisal",
    postAt: "18 agustus 2022",
  });
});

app.listen(port, function () {
  console.log("server running on port ${port}");
});
