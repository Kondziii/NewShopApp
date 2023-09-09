import { ProductDescription } from '../atoms/ProductDescription';
import { ProductImage } from '../atoms/ProductImage';
import { type Product } from '@/types/Product';

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <article>
        <ProductImage {...product.image}></ProductImage>
        <ProductDescription product={product}></ProductDescription>
      </article>
    </li>
  );
};
