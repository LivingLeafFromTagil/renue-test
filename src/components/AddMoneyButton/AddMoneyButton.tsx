import React, { useContext } from 'react';
import { Context } from '../../App';

type AddMoneyProps = {
  value: number;
}

export const AddMoneyButton = (props: AddMoneyProps) => {
  const context = useContext(Context);

  return (
    <button
      className='transition delay-150 border border-solid border-black rounded-lg p-2 mr-3 hover:bg-sky-700 hover:text-white'
      onClick={() => {
        context.setMoney(context.money + props.value);
      }}
    >
      +{props.value}
    </button>
  );
};