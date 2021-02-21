import express from "express";
import axios from "axios";
import Authors from "../models/Authors";
import verify from "./verifyAdmin";
import chalk from "chalk";

const router = express.Router();

router.get("/get-publications", async (req, res) => {
  let authors_obj = await Authors.findById("603101e90090c5574c425322");
  let all_authors = authors_obj.authors;

  let promises = [];
  let articles = [];
  let article_ids = [];
  let authors_formatted = [];
  all_authors.map((author) => {
    authors_formatted.push(author.replace("+", " "));
    promises.push(
      axios
        .get(`https://dblp.org/search/publ/api?q=${author}&format=json&c=0`)
        .then((response) => {
          let all_articles = response.data.result.hits.hit;
          try {
            all_articles.map((article) => {
              if (!article_ids.includes(article["@id"])) {
                try {
                  let authors = article.info.authors.author;
                  for (let i = 0; i < authors.length; i++) {
                    let name = authors[i].text;
                    if (
                      name === author.replace("+", " ") &&
                      !article_ids.includes(article["@id"])
                    ) {
                      articles.push(article);
                    }
                  }

                  article_ids.push(article["@id"]);
                } catch {
                  (err) => console.log(chalk.blue(err));
                }
              }
            });
          } catch {
            (err) => console.log(err);
          }
        })
    );
  });

  axios.all(promises).then((response) => {
    res.json({ articles: articles, authors: authors_formatted });
  });
});

router.post("/add-author", async (req, res) => {
  //https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  }
  try {
    let author = req.body.name;
    author = titleCase(author);
    let message = "";
    author = author.replace(/\s/g, "+");
    let all_authors = await Authors.findById("603101e90090c5574c425322");

    if (!all_authors.authors.includes(author)) {
      all_authors.authors.push(author);
      message = "Author added to search query";
    } else {
      message = "Author already exists in search";
    }
    try {
      await Authors.replaceOne(
        { _id: "603101e90090c5574c425322" },
        all_authors
      );
    } catch {
      (err) => console.log(err);
    }
    res.send(message);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/get-authors", async (req, res) => {
  try {
    let all_authors = await Authors.findById("603101e90090c5574c425322");

    let authors_from_db = all_authors.authors;
    let authors = [];
    authors_from_db.map((author) => {
      authors.push(author.replace("+", " "));
    });
    res.json(authors);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
