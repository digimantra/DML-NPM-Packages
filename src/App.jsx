import { If, Else, Then } from "./stories/Conditionals";

const App = () => {
  const age = 19;

  const isDrink = age > 18;

  // Example age and drinkingAge
  function createAsyncBoolean(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value); // Resolves with the provided boolean value
      }, 2000); // Simulating a delay of 1 second
    });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <If condition={createAsyncBoolean(isDrink)}>
        <Then>
          <div>You are old enough to drink!</div>
        </Then>
        <Else>
          <div>You are not old enough to drink.</div>
        </Else>
      </If>
    </div>
  );
};

export default App;
