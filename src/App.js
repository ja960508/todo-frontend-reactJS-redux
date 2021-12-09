import "./App.css";
import CounterContainer from "./containers/counter_container";
import TodosContainer from "./containers/todos_container_with_hooks";

function App() {
  return (
    <div className='App'>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
