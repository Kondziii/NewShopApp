import { ProductListItem } from '../molecules/ProductListItem';
import { type Product } from '@/types/Product';

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul
      data-testid='products-list'
      className='grid sm:grid-cols-2  lg:grid-cols-4 gap-4'
    >
      {products.map((product) => (
        <ProductListItem key={product.id} product={product}></ProductListItem>
      ))}
    </ul>
  );
};
