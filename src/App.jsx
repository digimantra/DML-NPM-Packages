import { If, Else, Then, Loading} from "./stories/Conditionals";


const App = () => {

  function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-screen">
      <If condition={fetchData()}>

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
