export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderServiceResponce = {
  id: number;
  userId: number;
  productIds?: number[];
};
