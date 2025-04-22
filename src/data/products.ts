export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  interestRate?: string;
  minimumAmount?: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Cuenta Ahorro Plus',
    description: 'Cuenta de ahorros con beneficios exclusivos y acceso a inversiones.',
    category: 'Cuentas',
    interestRate: '4.5%',
    minimumAmount: 'S/ 100',
    imageUrl: '/images/savings.jpg',
  },
  {
    id: '2',
    title: 'Tarjeta Platinum',
    description: 'Tarjeta de crédito con millas y beneficios premium.',
    category: 'Tarjetas',
    minimumAmount: 'S/ 5,000',
    imageUrl: '/images/credit-card.jpg',
  },
  {
    id: '3',
    title: 'Fondo de Inversión',
    description: 'Invierte en fondos mutuos con rendimientos atractivos.',
    category: 'Inversiones',
    interestRate: '8.2%',
    minimumAmount: 'S/ 1,000',
    imageUrl: '/images/investment.jpg',
  },
  {
    id: '4',
    title: 'Seguro de Vida',
    description: 'Protección para ti y tu familia con cobertura completa.',
    category: 'Seguros',
    imageUrl: '/images/insurance.jpg',
  },
  {
    id: '5',
    title: 'Préstamo Personal',
    description: 'Financiamiento rápido y flexible para tus proyectos.',
    category: 'Préstamos',
    interestRate: '12.5%',
    minimumAmount: 'S/ 10,000',
    imageUrl: '/images/loan.jpg',
  },
  {
    id: '6',
    title: 'Cuenta Empresarial',
    description: 'Solución bancaria completa para tu negocio.',
    category: 'Empresas',
    minimumAmount: 'S/ 1,000',
    imageUrl: '/images/business.jpg',
  },
]; 