import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  interestRate?: string;
  minimumAmount?: string;
  imageUrl: string;
}

const ProductCard = ({
  title,
  description,
  category,
  interestRate,
  minimumAmount,
  imageUrl,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{category}</span>
          {interestRate && (
            <span className="text-sm font-semibold text-green-600">
              {interestRate} TEA
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {minimumAmount && (
          <p className="text-sm text-gray-500">
            Monto mínimo: {minimumAmount}
          </p>
        )}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Conocer más
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 