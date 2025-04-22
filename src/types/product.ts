export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  minimumAmount: number;
  riskLevel: RiskLevel;
  returnRate: number;
  imageUrl: string;
  features: string[];
  terms: ProductTerms;
}

export type ProductCategory = 
  | 'fixed_income'
  | 'equities'
  | 'cryptocurrencies'
  | 'real_estate'
  | 'commodities';

export type RiskLevel = 
  | 'low'
  | 'medium'
  | 'high';

export interface ProductTerms {
  minimumInvestment: number;
  lockupPeriod: number; // in months
  managementFee: number;
  performanceFee?: number;
}

export interface ProductFilter {
  category?: ProductCategory;
  riskLevel?: RiskLevel;
  minimumAmount?: number;
}

export interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export interface CategoryFilterProps {
  selectedCategory?: ProductCategory;
  onCategoryChange: (category?: ProductCategory) => void;
} 