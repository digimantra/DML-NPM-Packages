
import {Table} from "./stories/Table/Table"



const rows= [
  {
    key:1,
      name: "John",
      age: 30,
      email: "john@example.com",
      contact: "+1234567890",
      order: "ABC123",
      price: 50,
      status: "pending"
  },
  {

    key:2,
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      contact: "+1987654321",
      order: "DEF456",
      price: 70,
      status: "completed"
  },
  {
    key:3,
      name: "Bob",
      age: 35,
      email: "bob@example.com",
      contact: "+1122334455",
      order: "GHI789",
      price: 100,
      status: "pending"
  }
];

const title = [
  
  {
id:1,
name:"name"
},

{
  id:2,
  name:"Age"
  },

  {
    id:3,
    name:"email"
    },

    {
      id:4,
      name:"contact"
      },

      {
        id:5,
        name:"order"
        },

        {
          id:6,
          name:"price"
          },

          {

            id:7,
            name:"status"
          }
];


const App = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <Table rows={rows} titles={title}/>

    </div>
  );
};

export default App;
