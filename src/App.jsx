import { If, Else, Then, Loading} from "./stories/Conditionals";


const App = () => {

  function test() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(false); // Resolving with true after 2000 milliseconds
      }, 2000);
    });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-screen">
      <If condition={12 > 10}>

        <Loading>loading..</Loading>
        <Then>
          <div>You are old enough to drink</div>
        </Then>

        <Else>
          <div>Not old enough.</div>
        </Else>
      </If>
    </div>
    </div>
  );
};

export default App;
