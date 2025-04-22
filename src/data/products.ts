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
    minimumAmount: '$100',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Cuenta+Ahorro',
  },
  {
    id: '2',
    title: 'Tarjeta Platinum',
    description: 'Tarjeta de crédito con millas y beneficios premium.',
    category: 'Tarjetas',
    type: 'Crédito',
    minimumAmount: '$5,000',
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
    minimumAmount: '$1,000',
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
    minimumAmount: '$10,000',
    riskLevel: 'Medio',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Préstamo+Personal',
  },
  {
    id: '6',
    title: 'Cuenta Empresarial',
    description: 'Solución bancaria completa para tu negocio.',
    category: 'Empresas',
    type: 'Corriente',
    minimumAmount: '$1,000',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Cuenta+Empresarial',
  },
  {
    id: '7',
    title: 'Fondo de Pensiones',
    description: 'Plan de ahorro para tu jubilación con beneficios fiscales.',
    category: 'Inversiones',
    type: 'Pensión',
    interestRate: '6.8%',
    minimumAmount: '$500',
    riskLevel: 'Medio',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Fondo+Pensiones',
  },
  {
    id: '8',
    title: 'Seguro de Hogar',
    description: 'Protección completa para tu vivienda y pertenencias.',
    category: 'Seguros',
    type: 'Hogar',
    minimumAmount: '$300',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Seguro+Hogar',
  },
  {
    id: '9',
    title: 'Préstamo Hipotecario',
    description: 'Financiamiento para la compra de tu vivienda.',
    category: 'Préstamos',
    type: 'Hipotecario',
    interestRate: '7.9%',
    minimumAmount: '$50,000',
    riskLevel: 'Medio',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Préstamo+Hipotecario',
  },
  {
    id: '10',
    title: 'Tarjeta de Débito Gold',
    description: 'Acceso a beneficios exclusivos y reembolsos en compras.',
    category: 'Tarjetas',
    type: 'Débito',
    minimumAmount: '$2,000',
    riskLevel: 'Bajo',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Tarjeta+Gold',
  },
  {
    id: '11',
    title: 'Cuenta de Inversión',
    description: 'Cuenta especializada para inversiones con acceso a mercados globales.',
    category: 'Inversiones',
    type: 'Inversión',
    interestRate: '5.5%',
    minimumAmount: '$5,000',
    riskLevel: 'Alto',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Cuenta+Inversión',
  },
  {
    id: '12',
    title: 'Préstamo Empresarial',
    description: 'Financiamiento para el crecimiento de tu negocio.',
    category: 'Empresas',
    type: 'Empresarial',
    interestRate: '9.5%',
    minimumAmount: '$25,000',
    riskLevel: 'Medio',
    imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Préstamo+Empresarial',
  }
];

export const categories = Array.from(new Set(products.map(product => product.category))); 