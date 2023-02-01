import { Product, ProductProps } from "../Product/Product";

const data: ProductProps[] = [
  {
    id: 1,
    title: 'Product1',
    count: 8,
    price: 15,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 2,
    title: 'Product1',
    count: 8,
    price: 10,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 3,
    title: 'Product1',
    count: 3,
    price: 45,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 4,
    title: 'Product1',
    count: 8,
    price: 15,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 5,
    title: 'Product1',
    count: 11,
    price: 27,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 6,
    title: 'Product1',
    count: 11,
    price: 27,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 7,
    title: 'Product1',
    count: 11,
    price: 27,
    imageUrl: '../../img/cheese.png',
  },
  {
    id: 8,
    title: 'Product1',
    count: 11,
    price: 27,
    imageUrl: '../../img/cheese.png',
  },
];

window.localStorage.setItem('data', JSON.stringify(data));

console.log(data.filter(elem => elem.id === 1))

const products: ProductProps[] = JSON.parse(window.localStorage.getItem('data')!)

const elements = products.map((elem) => {
  return (
    <Product
    id={elem.id} 
    title={elem.title}
    count={elem.count}
    price={elem.price}
    imageUrl={elem.imageUrl}
    key={elem.id}
    />
  )
})

export const ProductList = () => {
  return (
    <main className="container flex mt-10 justify-between flex-wrap">
      {elements}
    </main>
  )
}