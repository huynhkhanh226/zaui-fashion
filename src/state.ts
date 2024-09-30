import { atom } from "jotai";
import { Product } from "types";
import { getUserInfo } from "zmp-sdk";

const categoryImages = import.meta.glob<{ default: string }>(
  "./static/shop/categories/*.png",
  { eager: true }
);

const productImages = import.meta.glob<{ default: string }>(
  "./static/shop/products/*.jpg",
  { eager: true }
);

console.log(categoryImages);

export const userState = atom(() =>
  getUserInfo({
    avatarType: "normal",
  })
);

export const categoriesState = atom(() =>
  ["Áo phông", "Váy liền thân", "Chống nắng", "Quần jean"].map(
    (name, index) => ({
      id: index + 1,
      name,
      image:
        categoryImages[`./static/shop/categories/${index + 1}.png`].default,
    })
  )
);

export const productsState = atom<Product[]>((get) => {
  const category = get(categoriesState)[0];
  return [
    {
      id: 1,
      name: "Light brown knit sweater",
      price: 189000,
    },
    {
      id: 2,
      name: "Beige oversized sweater",
      price: 189000,
      originalPrice: 300000,
    },
    {
      id: 3,
      name: "Brown casual sweater",
      price: 189000,
      originalPrice: 300000,
    },
    {
      id: 4,
      name: "Dark brown crew neck sweater",
      price: 189000,
      originalPrice: 300000,
    },
    {
      id: 5,
      name: "Brown ribbed sweater",
      price: 189000,
      originalPrice: 300000,
    },
    {
      id: 6,
      name: "Chunky brown sweater",
      price: 189000,
      originalPrice: 300000,
    },
    {
      id: 7,
      name: "Classic brown wool sweater",
      price: 189000,
      originalPrice: 300000,
    },
    {
      id: 8,
      name: "Long brown sweater brown sweater",
      price: 189000,
      originalPrice: 300000,
    },
  ].map((product) => ({
    ...product,
    category,
    image: productImages[`./static/shop/products/${product.id}.jpg`].default,
  }));
});

export const flashSaleProductsState = atom((get) => get(productsState));
