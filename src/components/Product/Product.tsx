import React, {useEffect, useState} from 'react';
import logo from '../../img/cheese.png';

export type ProductProps = {
  id: number,
  title: string,
  count: number,
  imageUrl?: string,
  price: number,
}

export const Product = (props: ProductProps) => {
  const [number, setCount] = useState(props.count);

  useEffect(() => {
    console.log(`Product ID = ${props.id}, count = ${number}`);
  });

  return (
    <div className="w-56 mr-4">
      <img src={logo} alt="logo" style={{opacity: 0.1 * props.id}}/>
      <p>{props.title}</p>
      <p>Price: {props.price}</p>
      <p>Count: {number}</p>
      <div className="buttons">
        <button
        className='w-full border-solid border border-black'
        onClick={() => {
          const newCount = number - 1;
          setCount(newCount);
          console.log(number);
        }}
        >
          +
        </button>
      </div>
    </div>
  )
}