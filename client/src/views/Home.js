import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Data from "../assets/magnifying.svg";
import Vacancy from "../assets/search.svg";
import Work from "../assets/working.svg";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400,
              flexDirection: "column",
            }}
          >
            <Typography
              align='center'
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              Vision
            </Typography>
            <img
              alt=''
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: "100px",
                height: "100px",
              }}
              src={Data}
            />
            <Typography
              align='justify'
              style={{ padding: "0px 30px 20px 30px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          {" "}
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400,
              flexDirection: "column",
            }}
          >
            <Typography
              align='center'
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              Our Work
            </Typography>
            <img
              alt=''
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: "100px",
                height: "100px",
              }}
              src={Work}
            />
            <Typography
              align='justify'
              style={{ padding: "0px 30px 20px 30px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          {" "}
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400,
              flexDirection: "column",
            }}
          >
            <Typography
              align='center'
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              Join Us
            </Typography>
            <img
              alt=''
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: "100px",
                height: "100px",
              }}
              src={Vacancy}
            />
            <Typography
              align='justify'
              style={{ padding: "0px 30px 20px 30px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Typography>
          </Card>
        </Grid>
        <Typography align='justify'>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </Typography>
      </Grid>
    </div>
  );
}
