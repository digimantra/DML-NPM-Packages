
// import {Table} from "./stories/Table/Table"
// import {Icons} from "./stories/Icons/Icons"
// import { useState } from "react";
// import {Menu} from "./stories/Menu/Menu"
// import { IoHomeOutline } from "react-icons/io5";
// import { FaListUl } from "react-icons/fa";

// import { Chart } from "./stories/Charts/Chart";
// import { Actions } from "./stories/Actions/Actions";
// import clsx from "clsx";
// import {Carousel} from "./stories/carousel";
// import { Notifications } from "./stories/Notifications/Notifications";




//For Table
// const title = [
//   {
// id:1,
// name:"name",
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


//For menu
// const dropMenu = [
//   {
//     id:1,
//     icon:(<IoHomeOutline/>),

//     heading:"Home",

//     drop:["clothings","accessories","Shoes", "Hoodies"],


//   },
//   {
//     id:2,

//     icon:(<FaListUl/>),

//     heading:"About",

//     drop:["Vision","Mission","team","contact"],


//   }
// ]

//For Charts
// const lineChartData = {
//   labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//   datasets: [
//     {
//       label: "Product1",
//       data: [100, 200, 300, 200, 150, 500, 600,300, 200, 150, 500, 600], // Added data point for Sunday
//       borderColor: "red",
//       backgroundColor: "red",
//       stack: 'Stack 1',
//     },
//     {
//       label: "Product2",
//       data: [200, 300, 250, 100, 150, 800, 400,200, 300, 250, 100, 150,], // Added data point for Sunday
//       borderColor: "blue",
//       backgroundColor: "blue",
//       stack: 'Stack 2',
//     },

//     {
//       label: "Product3",
//       data: [350, 150, 400, 200, 500, 300, 450, 250, 350, 200, 300, 250], // Different data values
//       borderColor: "teal",
//       backgroundColor: "teal",
//       stack: 'Stack 3',
//     }
    
//   ]
// };


//For notifications
// const data = [
//   {
//     id: 1,
//     notificationContent: "A new user has been registered",
//     dateTime: "Apr 09, 2024 12:52:18"
//   },
//   {
//     id: 2,
//     notificationContent: "Your account has been updated",
//     dateTime: "Apr 10, 2024 09:20:45"
//   },
//   {
//     id: 3,
//     notificationContent: "You have a new message",
//     dateTime: "Apr 11, 2024 15:10:32"
//   },
//   {
//     id: 4,
//     notificationContent: "Payment received",
//     dateTime: "Apr 12, 2024 17:30:00"
//   },
//   {
//     id: 5,
//     notificationContent: "Reminder: Webinar tomorrow",
//     dateTime: "Apr 13, 2024 10:00:00"
//   },
//   {
//     id: 6,
//     notificationContent: "Your subscription expires soon",
//     dateTime: "Apr 14, 2024 14:45:00"
//   },
//   {
//     id: 7,
//     notificationContent: "New feature released: Dark mode",
//     dateTime: "Apr 15, 2024 08:00:00"
//   }
// ];




//Functions for Actions
// const handleDelete= ()=>{
//   console.log("deleted");
// }

// const handleEdit= ()=>{
//   console.log("Edited");
// }

// const handleView= ()=>{
//   console.log("see the list");
// }

//Data (array of objects) for actions
// const list =[{
//   id:1, name:"edit", action:handleEdit
// },

// {
//   id:2, name:"delete", action:handleDelete
// },

// {
//   id:3, name:"view", action:handleView
// }
// ]

// //Custom button/icon to display action dropdown on click
// const button = (<Icons name="ellipsis" height="20" width="20" fill="#000"/>)

// const DATA = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]?.map(( num ) => (
//   { children: <div className={clsx(
//     "h-24 flex justify-center items-center text-white", num % 2 === 0 ? "bg-blue-300" : "bg-red-300" )}>
//     {num}. This is Carousel
//   </div> }
// ));

// const args ={
//   initialIndex : 1,
//   numItemsVisible: 5,
//   numItemsScroll : 4,
// }

import { useState } from "react";
import { Avatar } from "./stories/Avatar/Avatar";


const App = () => {

  const [image, setImage] = useState("");

  const handleUpload = (img) => {
    setImage(img);
    // Here, you can do whatever you want with the uploaded image data
    console.log("Uploaded image data:", img);
  };

  console.log(image);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Avatar size="8" borderColor="red" onUpload={handleUpload} />
    </div>
  );
};

export default App;



    {/* <Table rows={rows} titles={title}/> */}
    {/* <Carousel items={DATA} {...args}/> */}
    {/* <Menu menu={dropMenu} show={show} setShow={setShow}/> */}
    {/* <Icons name="driver" filled fill="#000" height="30" width="30" /> */}
    {/* <Chart data={lineChartData} title="Sale" type="bar"/> */}
    {/* {<Notifications data={data}/>} */}
    {/* <Actions list={list} show={show} position="left" setShow={handleToggleAction} customButton={button}/> */}


