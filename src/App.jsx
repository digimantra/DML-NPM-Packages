import { useState } from "react";
import {Menu} from "./stories/Menu/Menu"

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
//   },{
//     key:13,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },{
//     key:14,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },{
//     key:15,
//       name: "Julius",
//       age: 38,
//       email: "julius@example.com",
//       contact: "+114253655",
//       order: "GHI780",
//       price: 130,
//       status: "resolved"
//   },{
//     key:16,
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
//       data: [200, 300, 250, 100, 150, 600, 400,200, 300, 250, 100, 150,], // Added data point for Sunday
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


// For notifications
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



const App = () => {
  const menuItems = [
    {
      title: 'Home',
    },
    {
      title: 'Services',
      submenu: [
        {
          title: 'Service 1',
        },
        {
          title: 'Service 2',
        },
      ],
    },
    {
      title: 'About Us',
    },
  ];


  return (
    <div className="flex items-center justify-center h-screen">
    <Menu title="Menu" items={menuItems}/>

    </div>
  );
};

export default App;



    {/* <Table rows={rows} titles={title}/> */}
    {/* <Carousel items={DATA} {...args}/> */}
    {/* <Menu menu={dropMenu} show={show} setShow={setShow}/> */}
    {/* <Icons name="driver" filled fill="#000" height="30" width="30" /> */}
    {/* <Chart data={lineChartData} title="Sale" type="bar"/> */}
   
    {/* <Actions list={list} show={show} position="left" setShow={handleToggleAction} customButton={button}/> */}


