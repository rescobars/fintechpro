import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import RiskReturnChart from '@/components/RiskReturnChart';
import Card from '@/components/styled/Card';
import Button from '@/components/styled/Button';

interface ProductPageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const getRiskLevelColor = (riskLevel: 'Bajo' | 'Medio' | 'Alto') => {
    switch (riskLevel) {
      case 'Bajo':
        return 'bg-green-100 text-green-800';
      case 'Medio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Alto':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
          aria-label="Volver al catálogo de productos"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al catálogo
        </Link>

        <Card as="article" elevated>
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-600" aria-label={`Categoría: ${product.category}`}>
                  {product.category}
                </span>
                {product.interestRate && (
                  <span className="text-sm font-semibold text-green-600" aria-label={`Tasa de interés: ${product.interestRate}`}>
                    {product.interestRate} TEA
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Product Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tipo:</span>
                  <span className="font-medium" aria-label={`Tipo: ${product.type}`}>
                    {product.type}
                  </span>
                </div>
                {product.riskLevel && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Nivel de Riesgo:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelColor(
                        product.riskLevel
                      )}`}
                      aria-label={`Nivel de riesgo: ${product.riskLevel}`}
                    >
                      {product.riskLevel}
                    </span>
                  </div>
                )}
                {product.minimumAmount && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monto Mínimo:</span>
                    <span className="font-medium" aria-label={`Monto mínimo: ${product.minimumAmount}`}>
                      {product.minimumAmount}
                    </span>
                  </div>
                )}
              </div>

              {/* Risk/Return Visualization */}
              {product.riskLevel && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Perfil de Riesgo y Retorno
                  </h2>
                  <RiskReturnChart
                    riskLevel={product.riskLevel}
                    returnRate={product.interestRate}
                  />
                </div>
              )}

              {/* Benefits Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Beneficios
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Acceso a plataforma digital 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Atención personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Seguridad garantizada</span>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="space-y-4">
                <Button
                  variant="primary"
                  fullWidth
                  aria-label="Solicitar información sobre este producto"
                >
                  Solicitar información
                </Button>
                <Button
                  variant="secondary"
                  fullWidth
                  aria-label="Comparar este producto con otros"
                >
                  Comparar con otros productos
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
} 