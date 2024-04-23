import { Menu } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};


const dropMenu = [
  {
    id:1,

    heading:"Home",

    drop:["clothings","accessories","Shoes", "Hoodies"], 
  
  
  },
  {
    id:2,


    heading:"About",

    drop:["Vision","Mission","team","contact"], 
  
  
  }
]

export const Default = {
  args: {
    menu:[ {
      id:1,
  
      heading:"Home",
  
      drop:["clothings","accessories","Shoes", "Hoodies"], 
    
    
    },
    {
      id:2,
  
  
      heading:"About",
  
      drop:["Vision","Mission","team","contact"], 
    
    
    }]
  },
};
