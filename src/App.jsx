
// import {Table} from "./stories/Table/Table"
// import {Icons} from "./stories/Icons/Icons"
import { useState } from "react";
import {Menu} from "./stories/Menu/Menu"
import { IoHomeOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";




// const title = [
  
//   {
// id:1,
// name:"name",
// // render: () => 
// // <Icons name="customers" height="20" width="20" fill="#e11d07"/> 
// },

// {
//   id:2,
//   name:"Age"
//   },

//   {
//     id:3,
//     name:"email"
//     },

//     {
//       id:4,
//       name:"contact"
//       },

//       {
//         id:5,
//         name:"order"
//         },

//         {
//           id:6,
//           name:"price"
//           },

//           {

//             id:7,
//             name:"status"
//           }
// ];

// const rows= [
//   {
//     key:1,
//       name: "John",
//       age: 30,
//       email: "john@example.com",
//       contact: "+1234567890",
//       order: "ABC123",
//       price: 50,
//       status: "pending"
//   },
//   {

//     key:2,
//       name: "Alice",
//       age: 25,
//       email: "alice@example.com",
//       contact: "+1987654321",
//       order: "DEF456",
//       price: 70,
//       status: "completed"
//   },
//   {
//     key:3,
//       name: "Bob",
//       age: 35,
//       email: "bob@example.com",
//       contact: "+1122334455",
//       order: "GHI789",
//       price: 100,
//       status: "pending"
//   },
//   {
//     key:4,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },
//   {
//     key:5,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },
//   {
//     key:6,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },
//   {
//     key:7,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },
//   {
//     key:8,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },
//   {
//     key:9,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },{
//     key:10,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },{
//     key:11,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },{
//     key:12,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   }
// ];



const dropMenu = [
  {
    id:1,
    icon:(<IoHomeOutline/>),

    heading:"Home",

    drop:["clothings","accessories","Shoes", "Hoodies"], 
  
  
  },
  {
    id:2,

    icon:(<FaListUl/>),

    heading:"About",

    drop:["Vision","Mission","team","contact"], 
  
  
  }
]

const App = () => {
  const [show,setShow]= useState(false)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
   
    {/* <Table rows={rows} titles={title}/> */}

    <Menu menu={dropMenu} show={show} setShow={setShow}/>
    {/* <Icons name="driver" filled fill="#000" height="30" width="30" /> */}

    </div>
  );
};

export default App;
