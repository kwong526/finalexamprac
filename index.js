const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs").promises;

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createCard");
});

// const formatData = (data) => {
//   return new Promise((resolve, reject) => {

//   });
// };
app.post("/createcard", async (req, res) => {
  const data = await req.body;
  // console.log(data);
  const db = await fs.readFile("database.json")
  .then((userData) => fs.writeFile(db, userData))
  res.render("homepage", {user: data})
});
app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
