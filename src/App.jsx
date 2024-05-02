import { Case, Default, Switch } from "./stories/Conditionals";

const App = () => {
  
  const num = 7;

  return (
    <div className="flex items-center justify-center h-screen">
      <Switch>
      <Case condition={num === 8}>Number is right</Case>
      <Case condition={num ===0 }>Number is zero</Case>
      <Default>This is default</Default>=
      </Switch>
    </div>
  );
};

export default App;
