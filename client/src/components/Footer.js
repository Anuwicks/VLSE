import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

function Footer(props) {
  return (
    <div>
      <Typography
        align='center'
        style={{
          color: "#929292",
          display: "flex",
          justifyContent: "center",
          padding: 2,
          fontSize: 14,
          borderTop: "1px solid #929292",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} - *Academic Research Group
        Name*
      </Typography>
    </div>
  );
}

export default Footer;
