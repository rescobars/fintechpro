import { useState, useCallback, useMemo } from 'react';
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
    if (!Array.isArray(products)) {
      return [];
    }
    
    return products.filter((product): product is Product => {
      if (!product) return false;
      
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [products, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  };
}; 