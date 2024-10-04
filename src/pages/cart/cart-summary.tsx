import Button from "components/button";
import { CustomerSupportIcon } from "components/vectors";
import { useCustomerSupport, useToBeImplemented } from "hooks";
import { useAtomValue } from "jotai";
import { cartState, cartTotalState } from "state";
import { formatPrice } from "utils/format";

export default function CartSummary() {
  const cart = useAtomValue(cartState);
  const cartTotal = useAtomValue(cartTotalState);

  const contact = useCustomerSupport();
  const toBeImplemented = useToBeImplemented();

  return (
    <div className="flex-none flex items-center py-3 px-4 space-x-2">
      <div className="space-y-1 flex-1">
        <div className="text-2xs text-subtitle">Tổng cộng ({cart.length})</div>
        <div className="text-sm font-medium text-primary">
          {formatPrice(cartTotal)}
        </div>
      </div>
      <Button className="w-10 h-10 !p-2" onClick={contact}>
        <CustomerSupportIcon />
      </Button>
      <Button primary onClick={toBeImplemented}>
        Mua ngay
      </Button>
    </div>
  );
}
