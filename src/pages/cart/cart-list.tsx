import Checkbox from "components/checkbox";
import HorizontalDivider from "components/horizontal-divider";
import { RemoveIcon } from "components/vectors";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { cartState, selectedCartItemIdsState } from "state";
import CartItem from "./cart-item";

export default function CartList() {
  const [cart, setCart] = useAtom(cartState);

  const [selectedItemIds, setSelectedItemIds] = useAtom(
    selectedCartItemIdsState
  );

  const checkedAll =
    selectedItemIds.length > 0 && selectedItemIds.length === cart.length;
  const checkAll = () => {
    setSelectedItemIds(cart.map((item) => item.id));
  };
  const uncheckAll = () => {
    setSelectedItemIds([]);
  };

  return (
    <div className="flex-1">
      <div className="px-4 py-3 flex items-center space-x-4">
        <Checkbox
          checked={checkedAll}
          onChange={checkedAll ? uncheckAll : checkAll}
        />
        <div className="text-sm font-medium flex-1">Tất cả</div>
        {selectedItemIds.length > 0 && (
          <RemoveIcon
            className="cursor-pointer"
            onClick={() => {
              setCart(
                cart.filter((item) => !selectedItemIds.includes(item.id))
              );
              setSelectedItemIds([]);
            }}
          />
        )}
      </div>
      <HorizontalDivider />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
