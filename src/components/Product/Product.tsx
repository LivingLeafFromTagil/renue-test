import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../App';
import logo from '../../img/cheese.png';
import empty from '../../img/out-of-stock.png';

type ProductProps = {
  id: number,
  title: string,
  count: number,
  price: number,
}

export const Product = (props: ProductProps) => {
  const context = useContext(Context)

  const [number, setCount] = useState(props.count);
  const [minimum, setMinimum] = useState(
    Math.min(
      ...context.availableProducts
        .filter((elem) => elem.count > 0)
        .map((elem) => elem.price)
    )
  );

  useEffect(() => {
    setMinimum(
      Math.min(
        ...context.availableProducts
          .filter((elem) => elem.count > 0)
          .map((elem) => elem.price)
      )
    );
  }, [context, minimum]);

  return (
    <div className='w-56 mr-8 ml-8'>
      {number === 0 && <img src={empty} alt='empty' />}
      {number > 0 && (
        <img src={logo} alt='logo' style={{ opacity: 0.1 * props.id }} />
      )}
      <p>{props.title}</p>
      <p>Price: {props.price}</p>
      <p>Count: {number}</p>
      <div className='buttons'>
        {context.money >= minimum && (
          <button
            className='w-full transition delay-150 border border-solid border-black rounded-lg p-1 hover:bg-sky-700 hover:text-white hover:'
            onClick={() => {
              const newCount = number - 1;
              if (newCount < 0) {
                alert("Товар закончился!");
                setCount(number);
              } else {
                const temp = context.availableProducts;
                temp.filter(elem => elem.id === props.id)[0].count -= 1;
                context.setAvailableProducts(temp);
                context.setMoney(context.money - props.price);
                setCount(newCount);
              }
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}