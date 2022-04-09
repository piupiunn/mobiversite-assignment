import "./App.css";
import UserList from "./components/user-list/UserList";

function App() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
