import { useNavigate } from "react-router-dom";
import { Product } from "types";
import { formatPrice } from "utils/format";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => navigate(`/product/${props.product.id}`)}
    >
      <img
        src={props.product.image}
        className="w-full aspect-square object-cover rounded-t-lg"
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
