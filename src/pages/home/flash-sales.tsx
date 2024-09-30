import ProductItem from "components/product-item";
import Section from "components/section";
import { useAtomValue } from "jotai";
import { flashSaleProductsState } from "state";

export default function FlashSales() {
  const products = useAtomValue(flashSaleProductsState);

  return (
    <Section title="Flash Sales" viewMore={() => {}}>
      <div className="grid grid-cols-2 px-4 py-2 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
