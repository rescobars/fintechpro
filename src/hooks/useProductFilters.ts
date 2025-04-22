import { useState, useMemo } from 'react';
import { Product } from '@/data/products';

interface UseProductFiltersProps {
  products: Product[];
}

interface UseProductFiltersReturn {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  filteredProducts: Product[];
}

export const useProductFilters = ({ products }: UseProductFiltersProps): UseProductFiltersReturn => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  };
}; 