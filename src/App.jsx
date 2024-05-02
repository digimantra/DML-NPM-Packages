import {
  Switch,
  Case,
  Default,
} from "./stories/Conditionals";

const App = () => {
  const num = 2.888;

  // Function to check if a number is odd
  const isOdd = (number) => {
    return number % 2 !== 0;
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <Switch>
        <Case condition={() => num === 2}>Num is two</Case>
        <Case condition={() => num > 2 && isOdd(num)}>Num is greater than two and odd.</Case>
        <Default>Num is greater than two and even.</Default>
      </Switch>
    </div>
  );
};

export default App;


{
  /* <If condition={input === "email"}>
<Loading>
<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
</Loading>
<Then>
<InputField type="email" placeholder="enter email" label="Email"/>
</Then>

<Else>
<InputField type="textarea" placeholder="enter content" label="Post"/>
</Else>
</If> */
}
