import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  messageDiv: {
    backgroundColor: "#f1f1f1",
    margin: "1em",
    position: "relative",
    borderRadius: "0.8em",
    padding: "1em 1.2em",
    width: "fit-content",
  },
  fromDiv: {},
  toDiv: {
    textAlign: "right",
    marginLeft: "auto",
  },
  message: {
    color: "#7a7a7a",
    margin: "0",
  },
});
const Conversation = (props) => {
  const classes = useStyles();
  const fromMessages = [
    "Hello",
    "How are you",
    "I am fine",
    "Whatsup",
    "Nothing Much",
    "Hello",
    "How are you",
    "I am fine",
    "Whatsup",
    "Nothing Much",
  ];
  const toMessages = [...fromMessages];

  return (
    <div>
      {fromMessages.map((message, index) => (
        <div>
          <div className={clsx(classes.messageDiv, classes.fromDiv)}>
            <h4 className={classes.message}>{message}</h4>
          </div>
          <div className={clsx(classes.messageDiv, classes.toDiv)}>
            <h4 className={classes.message}>{toMessages[index]}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

Conversation.propTypes = {};

export default Conversation;
