import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/get-publications", async (req, res) => {
  axios
    .get("https://dblp.org/search/publ/api?q=chunyang+chen&format=json&c=0", {})
    .then((response) => {
      let filtered_articles = [];
      let filtered_article_ids = [];
      const all_articles = response.data.result.hits.hit;
      for (let i = 0; i < all_articles.length; i++) {
        let article_id = all_articles[i]["@id"];

        let authors = all_articles[i].info.authors.author;

        for (let j = 0; j < authors.length; j++) {
          let author_name = authors[j].text;

          if (
            author_name === "Chunyang Chen" &&
            !filtered_article_ids.includes(article_id)
          ) {
            filtered_articles.push(all_articles[i]);
          }
        }
      }
      res.json(filtered_articles);
    })
    .catch((err) => console.log(err));
});

router.post("/update-answers", async (req, res) => {
  try {
    let user = await User.findById(req.user._id);

    let dbEntry = req.body.M1;

    let encrypted = user.answers;
    let answers = JSON.parse(decrypt(encrypted));
    answers.wb1 = dbEntry;

    user.answers = encrypt(JSON.stringify(answers));
    await User.replaceOne({ _id: req.user._id }, user);

    res.json({ message: "Success" });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
