import ProductGrid from "components/product-grid";
import ProductItem from "components/product-item";
import Section from "components/section";
import { useAtomValue } from "jotai";
import { flashSaleProductsState } from "state";

export default function FlashSales() {
  const products = useAtomValue(flashSaleProductsState);

  return (
    <Section title="Flash Sales" viewMore={() => {}}>
      <ProductGrid products={products} />
    </Section>
  );
}
