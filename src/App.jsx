
import {Icons} from "./stories/Icons/Icons"

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
const data = [
  {
    id: 1,
    notificationContent: "A new user has been registered",
    dateTime: "Apr 09, 2024 12:52:18"
  },
  {
    id: 2,
    notificationContent: "Your account has been updated",
    dateTime: "Apr 10, 2024 09:20:45"
  },
  {
    id: 3,
    notificationContent: "You have a new message",
    dateTime: "Apr 11, 2024 15:10:32"
  },
  {
    id: 4,
    notificationContent: "Payment received",
    dateTime: "Apr 12, 2024 17:30:00"
  },
  {
    id: 5,
    notificationContent: "Reminder: Webinar tomorrow",
    dateTime: "Apr 13, 2024 10:00:00"
  },
  {
    id: 6,
    notificationContent: "Your subscription expires soon",
    dateTime: "Apr 14, 2024 14:45:00"
  },
  {
    id: 7,
    notificationContent: "New feature released: Dark mode",
    dateTime: "Apr 15, 2024 08:00:00"
  }
];


import {Notifications} from "./stories/Notifications/Notifications"
const App = () => {

  const icon = (<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.26405 14.1815C4.59041 14.5942 5.00628 14.9273 5.48026 15.1557C5.95423 15.3841 6.47391 15.5019 7.00005 15.5C7.52618 15.5019 8.04586 15.3841 8.51984 15.1557C8.99381 14.9273 9.40968 14.5942 9.73604 14.1815C7.92035 14.4276 6.07974 14.4276 4.26405 14.1815ZM12.0625 5.75V6.278C12.0625 6.91175 12.2425 7.53125 12.5815 8.0585L13.4125 9.35075C14.1708 10.5313 13.5918 12.1355 12.2725 12.5083C8.82536 13.4847 5.17473 13.4847 1.72755 12.5083C0.408296 12.1355 -0.170703 10.5313 0.587547 9.35075L1.41855 8.0585C1.75873 7.52702 1.93913 6.90903 1.9383 6.278V5.75C1.9383 2.8505 4.2048 0.5 7.00005 0.5C9.79529 0.5 12.0625 2.8505 12.0625 5.75Z" fill="#202A31"/>
  </svg>)

  return (
    <div className="m-6">

      <nav className="flex items-center justify-around">

      <Icons name="warehouse" height="25" width="25" filled fill="#1b1b1b"/>

      <Notifications data={data} icon={icon}/>

      <Icons name="warehouse" height="25" width="25" filled fill="#1b1b1b"/>


      <Icons name="warehouse" height="25" width="25" filled fill="#1b1b1b"/>

      <Icons name="warehouse" height="25" width="25" filled fill="#1b1b1b"/>

      <Icons name="warehouse" height="25" width="25" filled fill="#1b1b1b"/>



      </nav>
      
     
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


