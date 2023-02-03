import { MoneyInfo } from "../../types";

//Функция выдачи сдачи
//Возыращает объект, ключи - номиналы, значение - количество
//Если не получается вернуть чистую сдачу, возвращает наиболее близкую сумму
export const iWantToGet = (ammountRequired: number, limits: MoneyInfo[]) => {
  
  const collect = (amount: number, nominals: number[]): any => {
    if (amount === 0) {
      return {};
    } 
    if (!nominals.length) {
      return amount;
    } 

    let currentNominal = nominals[0];
    let avaiableNotes = limits.filter(
      (elem) => elem.value === currentNominal
    )[0].count!;
    let notesNeeded = Math.floor(amount / currentNominal);
    let numberOfNotes = Math.min(avaiableNotes, notesNeeded);

    for (let i = numberOfNotes; i >= 0; i--) {
      let result = collect(amount - i * currentNominal, nominals.slice(1));
      console.log("i", i, "result", result);
      if (result) {
        return i ? { ...result, [currentNominal]: i } : result;
      }
    }
  }

  const nominals = limits.map(elem => elem.value).sort((a, b) => b - a);
  console.log(nominals);
  return collect(ammountRequired, nominals);
};

//Массив номиналов для сдачи
export const changerNominals: MoneyInfo[] = [
  { value: 10, count: Math.floor(5 * Math.random()) + 1, id: 1 },
  { value: 500, count: Math.floor(5 * Math.random()) + 1, id: 1 },
  { value: 100, count: Math.floor(5 * Math.random()) + 1, id: 1 },
  { value: 50, count: Math.floor(5 * Math.random()) + 1, id: 1 },
  { value: 5, count: Math.floor(5 * Math.random()) + 1, id: 1 },
  { value: 1, count: Math.floor(5 * Math.random()) + 1, id: 1 },
];
