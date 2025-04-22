export interface Product {
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

export const products: Product[] = [
  {
    id: '1',
    title: 'Cuenta Ahorro Plus',
    description: 'Cuenta de ahorros con beneficios exclusivos y acceso a inversiones.',
    category: 'Cuentas',
    type: 'Ahorro',
    interestRate: '4.5%',
    minimumAmount: 'S/ 100',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Cuenta+Ahorro',
  },
  {
    id: '2',
    title: 'Tarjeta Platinum',
    description: 'Tarjeta de crédito con millas y beneficios premium.',
    category: 'Tarjetas',
    type: 'Crédito',
    minimumAmount: 'S/ 5,000',
    riskLevel: 'Medio',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Tarjeta+Platinum',
  },
  {
    id: '3',
    title: 'Fondo de Inversión',
    description: 'Invierte en fondos mutuos con rendimientos atractivos.',
    category: 'Inversiones',
    type: 'Fondo Mutuo',
    interestRate: '8.2%',
    minimumAmount: 'S/ 1,000',
    riskLevel: 'Alto',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Fondo+Inversión',
  },
  {
    id: '4',
    title: 'Seguro de Vida',
    description: 'Protección para ti y tu familia con cobertura completa.',
    category: 'Seguros',
    type: 'Vida',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Seguro+Vida',
  },
  {
    id: '5',
    title: 'Préstamo Personal',
    description: 'Financiamiento rápido y flexible para tus proyectos.',
    category: 'Préstamos',
    type: 'Personal',
    interestRate: '12.5%',
    minimumAmount: 'S/ 10,000',
    riskLevel: 'Medio',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Préstamo+Personal',
  },
  {
    id: '6',
    title: 'Cuenta Empresarial',
    description: 'Solución bancaria completa para tu negocio.',
    category: 'Empresas',
    type: 'Corriente',
    minimumAmount: 'S/ 1,000',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Cuenta+Empresarial',
  },
];

export const categories = Array.from(new Set(products.map(product => product.category))); 