export type ProductInfo = {
  id: number;
  title: string;
  count: number;
  imageUrl?: string;
  price: number;
}

export type ShopInfo = {
  availableProducts: ProductInfo[];
  money: number;
  change: number;
  setAvailableProducts: any;
  setMoney: any;
  setChange: any;
};

export type MoneyInfo = {
  id: number;
  value: number;
  count?: number;
};