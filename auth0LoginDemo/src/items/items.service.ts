import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

let items: Items = {
    1: {
      id: 1,
      name: "Burger",
      price: 599,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 299,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 199,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };
  
  export const findAllSync = (): Item[] =>{
    return Object.values(items)
  }

  export const findAll = async (): Promise<Item[]> => {
    return Object.values(items)
  }

  export const find = (id:number) :Item =>{
    return items[id]
  }
  export const create = (item:BaseItem): Item =>{
    //lay id random, phu thuoc vao ngay thang hien tai
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...item
    }
    return items[id]
  } 
  //export const findAll = async (): Promise<Item[]> => Object.values(items);