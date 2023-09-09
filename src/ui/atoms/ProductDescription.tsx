import { type Product } from '@/types/Product';
import { formatPrice } from '@/utils/price';

type ProductDescriptionProps = {
  product: Omit<Product, 'image'>;
};

export const ProductDescription = ({
  product: { category, name, price },
}: ProductDescriptionProps) => {
  return (
    <div className='mt-2'>
      <h3 className='text-xl font-semibold'>{name}</h3>
      <p className='text-sm text-gray-500'>{category}</p>
      <span>{formatPrice(price)}</span>
    </div>
  );
};
