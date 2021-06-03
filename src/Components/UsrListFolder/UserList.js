import { Paper, Avatar } from "@material-ui/core";
import UsrActions from "./UserActions";

const UserList = ({ users, modificateUsr,userDesactivateHandlder,userDeleteHandler }) => {
 

 
 
 
  return (
    <div className="users-list">
      {users.map((user) => {
        return (
          <Paper className="user-row" elevation={3} key={user.id}>
            <div className="left-side">
              <Avatar src={user.image}></Avatar>
              <div className="user-name-container">
                <span className="user-name">{user.firstName}</span>
                <span className="user-lastname">{user.lastName}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
            <UsrActions
              modificateUsr={modificateUsr}
              user={user}
              userId={user.id}
              userDesactivateHandlder={userDesactivateHandlder}
              userDeleteHandler={userDeleteHandler}
            />
          </Paper>
        );
      })}
    </div>
  );
};
export default UserList;
