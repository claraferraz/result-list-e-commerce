import styles from "./styles.module.css";
import { Product, ProductDetails } from "../../productList";
import { calculatePrice } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  productId?: string;
};

const api = import.meta.env.VITE_API_URL;

const fetchProduct = async (id: number) => {
  const response = await fetch(`${api}/products/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const SingleProductDetail = ({ productId }: Props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [details, setDetails] = useState<ProductDetails[] | null>(null);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  if (!productId) {
    navigate("/");
    return;
  }
  const pId = parseInt(productId);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const response = await fetchProduct(pId);
      setProduct(response);
      setDetails(response.ProductDetails);
      setIsLoading(false);
    }
    fetch();
  }, [productId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!product) {
    return <p>Something went wrong, please try again</p>;
  }

  const priceDisplay = (value: number) => value.toLocaleString("pt-BR");
  let originalPriceP = "";
  if (product.discount <= 0) {
    originalPriceP = styles.hide;
  }
  const pPrice = parseFloat(product.price);
  const calculatedPrice = calculatePrice(product.price, product.discount);

  const tags = product.ProductTags.map((t) => {
    return t.tags.name;
  });

  const filterDetails = () => {
    const colors: string[] = [];
    const sizes: string[] = [];

    details?.forEach((d) => {
      if (!colors.includes(d.color)) {
        colors.push(d.color);
      }
      if (!sizes.includes(d.size)) {
        sizes.push(d.size);
      }
    });
    return {
      colors: colors,
      sizes: sizes,
    };
  };

  const detailsByColor = details
    ? Object.groupBy(details, (detail) => detail.color)
    : {};

  const detailsBySize = details
    ? Object.groupBy(details, (detail) => detail.size)
    : {};

  const availableSizes = color
    ? detailsByColor[color]?.map((detail) => detail.size) || []
    : filterDetails().sizes;

  const availableColors = size
    ? detailsBySize[size]?.map((detail) => detail.color) || []
    : filterDetails().colors;

  const skuDetail = details?.find(
    (detail) => detail.size === size && detail.color === color
  );

  const sku = skuDetail ? [skuDetail.productId, skuDetail.detailId] : null;

  const counter = (operation: string) => {
    let value = amount;
    if (operation === "+") {
      value += 1;
    }
    if (operation === "-") {
      if (value > 1) {
        value -= 1;
      }
    }
    setAmount(value);
  };

  const handleAddToCart = () => {};

  return (
    <>
      <header>
        <p>Home</p>
        <p>Shop</p>
        <p>{product.title}</p>
      </header>
      <section>
        <div className="images">
          <img src={product.images[0].url} alt="" />
          <img src={product.images[1].url} alt="" />
          <img src={product.images[2].url} alt="" />
          <img src={product.images[3].url} alt="" />
        </div>
        <div className="descriptionWrapper">
          <div>
            <h1>{product.title}</h1>
            <div className={styles.priceContainer}>
              <h3>Rp {priceDisplay(calculatedPrice)}</h3>
              <p className={originalPriceP}>Rp {priceDisplay(pPrice)}</p>
            </div>
            <p>
              ⭐⭐⭐⭐⭐ <span>5 Customer Review</span>
            </p>
            <p>{product.description}</p>
            <div>
              <p>Size</p>
              {filterDetails().sizes.map((s, i) => {
                return (
                  <button
                    disabled={!availableSizes.includes(s)}
                    key={i}
                    value={s}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <div>
              <p>Color</p>
              {filterDetails().colors.map((c, i) => {
                return (
                  <button
                    disabled={!availableColors.includes(c)}
                    key={i}
                    value={c}
                    onClick={() => setColor(c)}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            <div>
              <div>
                <button onClick={() => counter("-")}>-</button>
                <p>{amount}</p>
                <button onClick={() => counter("+")}>+</button>
              </div>
              <button onClick={() => handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div>
            <p>SKU: {sku ? sku.join("") : "-"}</p>
            <p>Category: {product.category}</p>
            <p>Tags: {tags.toString().replace(/,/g, ", ")}</p>
          </div>
        </div>
      </section>
    </>
  );
};
