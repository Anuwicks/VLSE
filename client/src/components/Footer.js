import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Footer(props) {
  return (
    <div style={{ marginTop: 30 }}>
      <Typography
        align='center'
        style={{
          color: "#929292",
          display: "flex",
          justifyContent: "center",
          padding: 2,
          fontSize: 14,
          borderTop: "1px solid #dedede",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} - VLSE
      </Typography>
      <Typography align='center'>
        <Link href='/admin'>Admin</Link>
      </Typography>
    </div>
  );
}

export default Footer;
