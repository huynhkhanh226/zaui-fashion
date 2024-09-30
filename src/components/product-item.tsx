import { Product } from "types";
import { formatPrice } from "utils/format";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  return (
    <div className="flex flex-col">
      <img
        src={props.product.image}
        className="w-full h-[150px] object-cover rounded-t-lg"
        alt={props.product.name}
      />
      <div className="py-2">
        <div className="text-3xs text-subtitle truncate">
          {props.product.category.name}
        </div>
        <div className="text-xs h-9 line-clamp-2">{props.product.name}</div>
        <div className="mt-0.5 text-sm font-medium">
          {formatPrice(props.product.price)}
        </div>
        <div className="text-3xs text-subtitle line-through">
          {formatPrice(props.product.price)}
        </div>
      </div>
    </div>
  );
}
