import UserItem from "./UserItem";
import PropTypes from "prop-types";

const UserList = ({ users }) => {
  return (
    <div>
      {console.log(users)}
      {users.map((item, index) => (
        <div key={index}>
          <UserItem name={item.name} />
        </div>
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
    })
  ).isRequired,
};

export default UserList;
