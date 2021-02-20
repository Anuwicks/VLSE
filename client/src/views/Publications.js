import { CardActionArea, CardContent, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PublicationsPage() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios
      .get("/api/publications/get-publications", {})
      .then((res) => {
        setArticles(res.data);
        setTeam(["Chunyang Chen"]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            align='center'
            style={{
              fontSize: 28,
              fontWeight: "bolder",
              marginBottom: 30,
              paddingBottom: 10,
              color: "#a3a3a3",
              borderBottom: "1px solid #dedede",
            }}
          >
            {" "}
            Publications{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {articles.map((article) => {
            return (
              <Grid
                item
                xs={12}
                style={{
                  marginLeft: 400,
                  marginRight: 400,
                }}
              >
                <Card
                  style={{
                    borderRadius: 11,
                    marginBottom: 20,
                  }}
                >
                  {" "}
                  <CardActionArea onClick={() => window.open(article.info.ee)}>
                    <CardHeader
                      title={
                        <Typography
                          style={{ fontSize: 24, fontWeight: "bolder" }}
                        >
                          {" "}
                          {article.info.title}{" "}
                        </Typography>
                      }
                      style={{
                        padding: 12,
                        borderBottom: "1px solid #dedede",
                        paddingBottom: 5,
                      }}
                    />

                    <CardContent>
                      <Typography
                        style={{
                          fontStyle: "italic",
                          fontSize: 21,
                          color: "#3f3f3f",
                        }}
                      >
                        [{article.info.venue}- {article.info.year}]
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 20,
                          marginTop: 10,
                          marginBottom: -5,
                          fontWeight: "bold",
                          color: "#777777",
                        }}
                      >
                        Authors:
                      </Typography>
                      <Grid container>
                        {article.info.authors.author.map((author) => (
                          <Grid
                            item
                            xs={2}
                            style={{
                              marginTop: 5,
                            }}
                          >
                            {team.includes(author.text) ? (
                              <Typography
                                align='left'
                                style={{
                                  color: "#037593",
                                  fontWeight: "bold",
                                  textDecoration: "underline",
                                }}
                              >
                                {author.text}
                              </Typography>
                            ) : (
                              <Typography
                                align='left'
                                style={{ color: "#535353" }}
                              >
                                {author.text}
                              </Typography>
                            )}
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
