import React, { useState } from "react";
import PropTypes from "prop-types";
import UserListInChatBox from "./UserListInChatBox";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import clsx from "clsx";
import Conversation from "./Conversation";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import UserNameAndAvatar from "./UserNameAndAvatar";

const ChatBox = (props) => {
  const {
    isUserList,
    setSelectedUsersInChat,
    closeUserChat,
    data,
    chatBoxRightPos,
  } = props;
  const useStyles = makeStyles({
    chatBox: {
      maxHeight: "fit-content",
      width: "18vw",
      border: "1px solid #2c65c8",
      borderBottom: "none",
      position: "fixed",
      bottom: 0,
      right: chatBoxRightPos,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: "white",
    },
    chatBoxOpen: {
      transition: "all 2s ease",
      transform: "translateY(0%)",
    },
    chatBoxClosed: {
      transform: isUserList ? "translateY(89%)" : "translateY(86%)",
      transition: "all 2s ease",
    },
    chatCap: {
      width: "100%",
      height: 50,
      backgroundColor: "#2c65c8",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      color: "white",
      cursor: "pointer",
    },
    chatCapFirstSegment: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: "0.5em",
      paddingLeft: "0.8em",
      textOverflow: "ellipsis",
    },
    chatCapSecondSegment: {
      paddingRight: "0.5em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    chatBody: {
      maxHeight: isUserList ? 400 : 300,
      overflowY: "scroll",
    },
  });
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        classes.chatBox,
        open ? classes.chatBoxOpen : classes.chatBoxClosed
      )}
    >
      <div className={classes.chatCap} onClick={handleChange}>
        <div className={classes.chatCapFirstSegment}>
          {isUserList ? (
            <>
              <ModeCommentOutlinedIcon />
              <Typography>Chats</Typography>
            </>
          ) : (
            <UserNameAndAvatar userData={data?.selectedUserData} />
          )}
        </div>
        <div className={classes.chatCapSecondSegment}>
          {open ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}
          {!isUserList && (
            <IconButton
              onClick={() => {
                closeUserChat(data?.selectedUserData);
              }}
              size="small"
              sx={{ ml: 2 }}
              color="inherit"
            >
              <CloseOutlinedIcon fontSize="small" color="inherit" />
            </IconButton>
          )}
        </div>
      </div>
      <div className={classes.chatBody}>
        {isUserList ? (
          <UserListInChatBox
            userData={data?.userListData}
            setSelectedUsersInChat={setSelectedUsersInChat}
          />
        ) : (
          <Conversation />
        )}
      </div>
    </div>
  );
};

ChatBox.propTypes = {
  isUserList: PropTypes.bool.isRequired,
  setSelectedUsersInChat: PropTypes.func,
  closeUserChat: PropTypes.func,
  data: PropTypes.object,
  chatBoxRightPos: PropTypes.number,
};

export default ChatBox;
