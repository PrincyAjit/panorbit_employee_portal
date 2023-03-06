import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserNameAndAvatar from "./UserNameAndAvatar";

const ScrollableCard = ({ cardTitle, data: usersData }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: "35vw",
      margin: "auto",
      maxHeight: 600,
      borderRadius: "2em",
      padding: 0,
    },
    cardTitle: {
      margin: 0,
      padding: "1.5em",
      color: "#545454",
      fontSize: "1.4em",
      fontWeight: 600,
      textAlign: "center",
    },
    cardContent: {
      padding: "0 !important",
      backgroundColor: "#f6f6f6",
    },
    userDataList: {
      maxHeight: 380,
      margin: "auto",
      overflowY: "scroll",
      scrollbarWidth: "thin",
      backgroundColor: "white",
      marginBottom: "2em",
    },
    userEntry: {
      color: "black",
      textDecoration: "none",
    },
  });
  const classes = useStyles();
  const cardTitleDefaultValue = "Select an account";
  const notLastEntry = (index) => index < usersData?.length - 1;

  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <h3 className={classes.cardTitle}>
            {cardTitle ?? cardTitleDefaultValue}
          </h3>
          <List className={classes.userDataList}>
            {usersData.map((user, index) => (
              <>
                <UserNameAndAvatar path="/user" userData={user} />
                {notLastEntry(index) && <Divider />}
              </>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

ScrollableCard.propTypes = {};

export default ScrollableCard;
