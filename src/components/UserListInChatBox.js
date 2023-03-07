import React from "react";
import PropTypes from "prop-types";
import UserNameAndAvatar from "./UserNameAndAvatar";

const UserListInChatBox = (props) => {
  const { userData, setSelectedUsersInChat } = props;
  return (
    <div>
      {userData?.map((user) => (
        <UserNameAndAvatar
          userData={user}
          componentAs="button"
          onButtonClick={setSelectedUsersInChat}
          showOnlineStatus={true}
        />
      ))}
    </div>
  );
};

UserListInChatBox.propTypes = {
  userData: PropTypes.array,
  setSelectedUsersInChat: PropTypes.func,
};

export default UserListInChatBox;
