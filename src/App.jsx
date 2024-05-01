import { If,Else,Then} from "./stories/Conditionals";

const App = () => {
  // Example age and drinkingAge
  const age = 22;
  const drinkingAge = 22;
  const gender = "male";
  const hasID = true;

  const condition = age >= drinkingAge && gender === "male";

  return (
    <div className="flex items-center justify-center h-screen">
      <If condition={condition}>
        <Then>
          <div>You are old enough to drink!</div>
          <If condition={hasID}>
            <Then>
              <div>You have a valid ID.</div>
            </Then>
            <Else>
              <div>You do not have a valid ID.</div>
            </Else>
          </If>
        </Then>
        <Else>
          <div>You are not old enough to drink.</div>
          <If condition={age < 18}>
            <Then>
              <div>You are under 18.</div>
            </Then>
            <Else>
              <div>You are between 18 and {drinkingAge - 1} years old.</div>
            </Else>
          </If>
        </Else>
      </If>
    </div>
  );
};

export default App;
