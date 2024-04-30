import { If, Else, Then } from "./stories/Conditionals/Conditionals";




const App = () => {
  // Example age and drinkingAge
  const age = 28;
  const drinkingAge = 21;

  const condition = age >=drinkingAge

  return (
    <div className="flex items-center justify-center h-screen">
      <If condition={condition}>
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
