import Image from 'next/image';
import Link from 'next/link';
import Card from './styled/Card';
import Button from './styled/Button';
import { Product } from '@/data/products';

const getRiskLevelColor = (riskLevel?: 'Bajo' | 'Medio' | 'Alto') => {
  switch (riskLevel) {
    case 'Bajo':
      return 'text-green-600';
    case 'Medio':
      return 'text-yellow-600';
    case 'Alto':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  interestRate?: string;
  minimumAmount?: string;
  riskLevel?: 'Bajo' | 'Medio' | 'Alto';
  imageUrl: string;
}

const ProductCard = ({
  id,
  title,
  description,
  category,
  type,
  interestRate,
  minimumAmount,
  riskLevel,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Card 
      as="article" 
      elevated
      className="h-full flex flex-col"
      role="article"
      aria-labelledby={`product-title-${id}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`Imagen de ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span 
            className="text-sm font-medium text-blue-600" 
            aria-label={`Categoría: ${category}`}
          >
            {category}
          </span>
          {interestRate && (
            <span 
              className="text-sm font-semibold text-green-600"
              aria-label={`Tasa de interés: ${interestRate}`}
            >
              {interestRate} TEA
            </span>
          )}
        </div>
        <h3 
          id={`product-title-${id}`}
          className="text-xl font-bold text-gray-900 mb-2"
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span 
            className="text-sm text-gray-500"
            aria-label={`Tipo: ${type}`}
          >
            Tipo: {type}
          </span>
          {riskLevel && (
            <span 
              className={`text-sm font-medium ${getRiskLevelColor(riskLevel)}`}
              aria-label={`Nivel de riesgo: ${riskLevel}`}
            >
              Riesgo: {riskLevel}
            </span>
          )}
        </div>
        {minimumAmount && (
          <p className="text-sm text-gray-500 mb-4" aria-label={`Monto mínimo: ${minimumAmount}`}>
            Monto mínimo: {minimumAmount}
          </p>
        )}
        <Link 
          href={`/product/${id}`}
          className="block w-full"
          aria-label={`Ver detalles de ${title}`}
        >
          <Button
            variant="primary"
            fullWidth
          >
            Ver detalles
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard; 