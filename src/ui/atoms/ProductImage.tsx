type ProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className='aspect-square rounded-xl overflow-hidden'>
      <img
        className='object-contain hover:scale-105 transition duration-200'
        src={src}
        alt={alt}
        width={320}
        height={320}
      />
    </div>
  );
};
