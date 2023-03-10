import React, { useContext } from "react";
import { DataContext } from "../App";
import { ScrollableCard } from "../components";
import { makeStyles } from "@material-ui/core/styles";

const LandingPage = () => {
  const useStyles = makeStyles({
    root: {
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        height: "calc(100% - 20px)",
        WebkitMask:
          "radial-gradient(126% 72% at bottom,white 79.5%,transparent 80%) left,radial-gradient(126% 72% at top,transparent 79.5%,white 80%) right",
        mask: "radial-gradient(126% 72% at bottom,white 79.5%,transparent 80%) left,radial-gradient(126% 72% at top,transparent 79.5%,white 80%) right",
        WebkitMaskSize: "50.1% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "50.1% 100%",
        maskRepeat: "no-repeat",
      },
      "&:before": {
        top: 0,
        background: "#d7cdea",
      },
      "&:after": {
        bottom: 0,
        background: "white",
      },
      height: "50vw",
      position: "relative",
      background: "linear-gradient(35deg,#702cc8, #395ac8)",
    },
    card: {
      zIndex: "3",
      position: "relative",
      top: "8em",
    },
  });
  const classes = useStyles();
  const { userDataInContext } = useContext(DataContext);

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <ScrollableCard
          cardTitle="Select an account"
          data={userDataInContext}
        />
      </div>
    </div>
  );
};

export default LandingPage;
