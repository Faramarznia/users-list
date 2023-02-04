import usersData from "./data/users.json";
import UserList from "./components/UserList";
import AverageAge from "./components/AverageAge";

const App = () => {
  const adminAge = usersData
    .filter((order) => order.role === "admin")
    .map((item) => item.age);

  let sum = 0;
  for (let number of adminAge) {
    sum += number;
  }

  let average = sum / adminAge.length;

  return (
    <div>
      <UserList
        users={usersData
          .filter((order) => order.role === "user")
          .map((item) => item)}
      />
      <AverageAge average={average} />
    </div>
  );
};

export default App;
