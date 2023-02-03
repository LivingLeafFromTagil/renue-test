import { useContext, useEffect } from "react";
import { changerNominals, iWantToGet } from "../../actions/changer/changer";
import { Context } from "../../App";
import { MoneyInfo } from "../../types";
import { AddMoneyButton } from "../AddMoneyButton/AddMoneyButton";
import { Product } from "../Product/Product";

//Деньги пользователя
const denominationsMoney: MoneyInfo[] = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 500,
  },
  {
    id: 4,
    value: 1000,
  }
]

export const ProductList = () => {
  const context = useContext(Context);

  //Создаю список продуктов
  const elements = context.availableProducts.map((elem) => {
    return (
      <Product
        id={elem.id}
        title={elem.title}
        count={elem.count}
        price={elem.price}
        key={elem.id}
      />
    );
  });

  //Создаю список кнопок добавления валюты
  const addButtons = denominationsMoney.map((elem) => {
    return <AddMoneyButton value={elem.value} key={elem.id} />;
  });

  useEffect(() => {
    if (
      context.availableProducts.filter(
        (elem) =>
          elem.count > 0 &&
          elem.price ===
            Math.min(
              ...context.availableProducts
                .filter((elem) => elem.count > 0)
                .map((elem) => elem.price)
            )
      ).length === 0
    ) {
      alert("Все товары были распроданы!");
    }
  })

  return (
    <main className='container mt-10 mb-10'>
      <div className='flex flex-wrap justify-between'>{elements}</div>
      <div className='mt-5'>
        <p>Money: {context.money}</p>
        <p>Change: {context.change}</p>
      </div>
      <div className='mt-5'>
        <p>Add money:</p>
        <div className='flex pt-2'>{addButtons}</div>
      </div>
      {context.money > 0 && (
        <div className='mt-5'>
          <button
            className='transition delay-150 border border-solid border-black rounded-lg p-2 mr-3 hover:bg-sky-700 hover:text-white'
            onClick={() => {
              const factChange = iWantToGet(context.money, changerNominals);
              let res = 0;
              for (let key in factChange) {
                res += Number(key) * factChange[key];
              }
              context.setChange(res);
              context.setMoney(context.money - res);
              if (
                context.money > 0 &&
                context.money <
                  Math.min(
                    ...context.availableProducts
                      .filter((elem) => elem.count > 0)
                      .map((elem) => elem.price)
                  )
              ) {
                context.setMoney(0);
                const temp = context.availableProducts;
                temp
                  .filter((elem) => elem.count > 0)
                  .filter(
                    (elem) =>
                      elem.price ===
                      Math.min(
                        ...context.availableProducts
                          .filter((elem) => elem.count > 0)
                          .map((elem) => elem.price)
                      )
                  )[0].count = 0;
                context.setAvailableProducts(temp);
              }
            }}
          >
            Get change
          </button>
        </div>
      )}
    </main>
  );
}