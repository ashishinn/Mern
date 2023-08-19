import React from "react";
import Products from "./components/Products";
import './App.css'
import NewProduct from "./components/NewProduct";

const App = () => {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10)
    },
    {
      id: "p2",
      title: "Surf Exel",
      amount: 100,
      date: new Date(2021, 2, 2)
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28)
    },
    {
      id: "p4",
      title: "Ariel",
      amount: 100,
      date: new Date(2021, 5, 5)
    },
  ];

  function printProductData(data){
    console.log("i am inside App.js");
    console.log(data);
  }
  return (
    <div >
      <NewProduct pranay={printProductData} />
        <Products item={products} />
    </div>
  )
};

export default App;