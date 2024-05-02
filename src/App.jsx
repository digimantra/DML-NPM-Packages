// import { If, Else, Then, Loading} from "./stories/Conditionals";
// import { InputField} from "./stories/InputField/InputField"
import { Menu } from "./stories/Menu/Menu";

const App = () => {
  return (
    <div className="flex items-center justify-center mt-10">
        <Menu />
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
