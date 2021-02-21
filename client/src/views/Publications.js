import {
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddAuthor from "../components/AddAuthor";

export default function PublicationsPage() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios
      .get("/api/publications/get-publications", {})
      .then((res) => {
        setArticles(res.data.articles);
        setTeam(res.data.authors);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const [verified, setVerified] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("/api/auth/verify", {
        headers: {
          "auth-token": localStorage.getItem("tkn"),
        },
      })
      .then((res) => {
        if (res.data === true) {
          setVerified(true);
        } else setVerified(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const [open1, setOpen] = React.useState(false);

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
          {loading ? (
            <Box
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                align='center'
                style={{ fontSize: 25, marginTop: -300, fontWeight: "bold" }}
              >
                {" "}
                Loading Publications Please Wait....
              </Typography>
            </Box>
          ) : (
            false
          )}
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              {articles.map((article) => {
                return (
                  <Grid
                    item
                    xs={12}
                    style={
                      {
                        /* marginLeft: 400,
                  marginRight: 400, */
                      }
                    }
                  >
                    <Card
                      style={{
                        borderRadius: 11,
                        marginBottom: 20,
                      }}
                    >
                      {" "}
                      <CardActionArea
                        onClick={() => window.open(article.info.ee)}
                      >
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
            <Grid item xs={3} style={{}}>
              {verified ? (
                <Button
                  variant='contained'
                  onClick={() => setOpen(true)}
                  style={{
                    background: "#2c9155",
                    color: "#fff",
                    marginLeft: 120,
                    marginTop: 50,
                  }}
                >
                  Add Authors to Search
                </Button>
              ) : (
                false
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <AddAuthor open={open1} setOpen={() => setOpen()} />
    </div>
  );
}
