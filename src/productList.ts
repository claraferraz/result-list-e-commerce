export type Product = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  discount: number;
  new: boolean;
  category: string;
  images: { url: string }[];
  ProductDetails: ProductDetails[];
  ProductTags: { tags: { name: string } }[];
};

export type ProductDetails = {
  color: string;
  size: string;
  stock: number;
  detailId: number;
  productId: number;
};
