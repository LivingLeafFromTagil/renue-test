import React, { createContext, useState } from 'react';
import { ProductList } from './components/ProductList/ProductList';
import { ShopInfo, ProductInfo } from './types';

//Список доступных продуктов
const shopInfo: ShopInfo = {
  availableProducts: [
    {
      id: 1,
      title: "Product1",
      count: 8,
      price: 15,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 2,
      title: "Product2",
      count: 8,
      price: 10,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 3,
      title: "Product3",
      count: 3,
      price: 45,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 4,
      title: "Product4",
      count: 8,
      price: 15,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 5,
      title: "Product5",
      count: 11,
      price: 27,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 6,
      title: "Product6",
      count: 11,
      price: 27,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 7,
      title: "Product7",
      count: 11,
      price: 27,
      imageUrl: "../../img/cheese.png",
    },
    {
      id: 8,
      title: "Product8",
      count: 11,
      price: 27,
      imageUrl: "../../img/cheese.png",
    },
  ],
  money: 0,
  change: 0,
  setAvailableProducts: function (products: ProductInfo[]): any {},
  setMoney: function (money: number): any {},
  setChange: function (change: number): any {},
};

export const Context = createContext(shopInfo);

function App() {
  const [availableProducts, setAvailableProducts] = useState(shopInfo.availableProducts);
  const [money, setMoney] = useState(shopInfo.money);
  const [change, setChange] = useState(shopInfo.change);

  return (
    <Context.Provider
      value={{
        availableProducts,
        money,
        change,
        setAvailableProducts,
        setMoney,
        setChange,
      }}
    >
      <div className='mx-auto max-w-6xl'>
        <header className='text-center'>
          <h1 className='text-4xl'>Shop</h1>
        </header>
        <ProductList />
      </div>
    </Context.Provider>
  );
}

export default App;
