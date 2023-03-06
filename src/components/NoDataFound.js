import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

const NoDataFound = () => {
  const useStyles = makeStyles({
    icon: {
      color: "green",
    },
    textDiv: {
      display: "flex",
      justifyContent: "center",
      padding: "1em",
    },
    text: {
      fontWeight: "bold",
      color: "#545454",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.textDiv}>
      <CheckCircleIcon className={classes.icon} />
      <Typography className={classes.text}>No Data Found</Typography>
    </div>
  );
};

export default NoDataFound;
