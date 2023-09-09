import { type Product } from '@/types/Product';
import { ProductList } from '@/ui/organisms/ProductList';

const productList: Product[] = [
  {
    id: '1',
    category: 'Accessories',
    name: 'Kubek',
    price: 4999,
    image: {
      alt: 'kubek',
      src: '/kubek.jfif',
    },
  },
  {
    id: '2',
    category: 'Clothes',
    name: 'Koszulka jednokolorowa',
    price: 6999,
    image: {
      alt: 'koszulka',
      src: '/koszulka.jfif',
    },
  },
  {
    id: '3',
    category: 'Clothes',
    name: 'Koszulka z obrazkiem',
    price: 8999,
    image: {
      alt: 'koszulka',
      src: '/koszulka2.webp',
    },
  },
  {
    id: '4',
    category: 'Electronics',
    name: 'Słuchawki',
    price: 129999,
    image: {
      alt: 'słuchawki',
      src: '/headphones.jpg',
    },
  },
]; //className='grid place-content-center min-h-screen min-w-full'

export default function Products() {
  return (
    <main className='min-h-screen grid place-content-center'>
      <section className='max-w-[1400px] mx-auto bg-slate-100 p-8'>
        <ProductList products={productList} />
      </section>
    </main>
  );
}
