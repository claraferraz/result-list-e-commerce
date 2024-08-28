import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Product } from "../../productList";

type CartProduct = {
  productId: number;
  detailsId: number;
  amount: number;
  image: string;
  title: string;
  price: number;
  productSubtotal: number;
};

export interface CartState {
  products: CartProduct[];
  //para o back: array de produtos com productId, detailId e amount
  //para o front: imagem1, amount, price, title, subtotal
}

const initialState: CartState = {
  products: [],
};

//const orderSubtotal = useAppSelector(selectOrderSubtotal);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      {
        payload,
      }: PayloadAction<{ product: Product; detailsId: number; amount?: number }>
    ) => {
      const { product, detailsId, amount = 1 } = payload;

      const p = state.products.find((p) => p.detailsId === detailsId);

      if (p) {
        p.amount += amount;
        p.productSubtotal = p.price * p.amount;
      } else {
        const discountMultiplier = 1 - product.discount / 100;
        const price = parseFloat(product.price) * discountMultiplier;
        const productSubtotal = price * amount;

        state.products.push({
          productId: product.id,
          detailsId,
          amount,
          image: product.images[0].url,
          price,
          title: product.title,
          productSubtotal,
        });
      }
    },

    removeFromCart: (state, { payload: detailsId }: PayloadAction<number>) => {
      const p = state.products.find((p) => p.detailsId === detailsId);
      if (p && p.amount > 1) {
        p.amount -= 1;
        p.productSubtotal = p.amount * p.price;
      } else {
        state.products = state.products.filter(
          (product) => product.detailsId !== detailsId
        );
      }
    },

    removeProduct: (state, { payload: detailsId }: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.detailsId !== detailsId
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  removeProduct: clearCart,
} = cartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart.products;

export const selectCartSubtotal = ({ cart }: RootState) =>
  cart.products.reduce((sum, product) => sum + product.productSubtotal, 0);

export default cartSlice.reducer;
