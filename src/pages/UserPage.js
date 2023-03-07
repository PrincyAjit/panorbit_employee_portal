import React, { useState, useContext } from "react";
import { DataContext } from "../App";
import { makeStyles } from "@material-ui/core/styles";
import {
  SideNav,
  UserProfile,
  ComingSoon,
  UserMenu,
  ChatBox,
} from "../components";
import { Divider, Typography } from "@material-ui/core";
import clsx from "clsx";

const sideNavMenuComponents = {
  Profile: <UserProfile />,
  Posts: <ComingSoon />,
  Gallery: <ComingSoon />,
  "To do": <ComingSoon />,
};
const sideNavMenuItems = Object.keys(sideNavMenuComponents);

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    margin: "4em",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "3em",
    paddingRight: "3em",
    marginBottom: "1em",
  },
  divider: {
    marginLeft: "3em",
    marginRight: "3em",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  infoColor: {
    color: "#5a5a5a", // blackish
  },
  bold: {
    fontWeight: 600,
  },
});
const UserPage = () => {
  const classes = useStyles();
  const mainChatWindowRightPos = 15;
  const chatWindowWidth = 18; // defined as 18vw in ChatBox component.
  const { userDataInContext } = useContext(DataContext);
  const userDataExists = userDataInContext?.length > 0;
  const [selectedMenuItem, setSelectedMenuItem] = useState(sideNavMenuItems[0]);
  const [selectedUsersInChat, setSelectedUsersInChat] = useState([]);

  const itemOnClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const setDefaultSelection = () => {
    setSelectedMenuItem(sideNavMenuItems[0]);
  };

  const inChatUserSelection = (selectedUserData) => {
    const isUserAlreadySelected = selectedUsersInChat?.some(
      (user) => user.id === selectedUserData.id
    );
    !isUserAlreadySelected &&
      setSelectedUsersInChat([...selectedUsersInChat, selectedUserData]);
  };

  const closeUserChat = (userToRemove) => {
    const updatedUsers = selectedUsersInChat?.filter(
      (user) => user.id !== userToRemove.id
    );
    setSelectedUsersInChat(updatedUsers);
  };

  const Header = () => {
    return (
      <div className={classes.header}>
        <Typography
          variant="h6"
          className={clsx(classes.bold, classes.infoColor)}
        >
          {selectedMenuItem}
        </Typography>
        <UserMenu setDefaultSelection={setDefaultSelection} />
      </div>
    );
  };

  const MainView = () => {
    return sideNavMenuComponents[selectedMenuItem];
  };

  const userChatBoxPosition = (index) => {
    const firstChat = index === 0;
    const leftSpacing = firstChat ? 20 : 15;
    const chatWindowCount = index + 1;
    const chatBoxStartPos =
      (mainChatWindowRightPos * chatWindowWidth + leftSpacing) *
      chatWindowCount;
    return chatBoxStartPos;
  };

  return (
    <div className={classes.root}>
      <SideNav
        sideNavMenuItems={sideNavMenuItems}
        selectedMenuItem={selectedMenuItem}
        itemOnClick={itemOnClick}
      />
      <div className={classes.body}>
        <Header />
        <Divider className={classes.divider} />
        <MainView />
      </div>
      {userDataExists && (
        <>
          <ChatBox
            data={{ userListData: userDataInContext }}
            isUserList={true}
            setSelectedUsersInChat={inChatUserSelection}
            chatBoxRightPos={mainChatWindowRightPos}
          />
          {selectedUsersInChat?.map((selectedUser, index) => (
            <ChatBox
              data={{ selectedUserData: selectedUser }}
              closeUserChat={closeUserChat}
              isUserList={false}
              chatBoxRightPos={userChatBoxPosition(index)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default UserPage;
