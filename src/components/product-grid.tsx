import { Product } from "types";
import ProductItem from "./product-item";
import { HTMLAttributes } from "react";

export interface ProductGridProps extends HTMLAttributes<HTMLDivElement> {
  products: Product[];
}

export default function ProductGrid({
  products,
  className,
  ...props
}: ProductGridProps) {
  return (
    <div
      className={"grid grid-cols-2 px-4 py-2 gap-4 ".concat(className ?? "")}
      {...props}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
