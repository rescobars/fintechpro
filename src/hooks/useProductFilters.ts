import { useState, useCallback } from 'react';
import { Product, ProductCategory, ProductFilter } from '@/types/product';

interface UseProductFiltersProps {
  initialProducts: Product[];
}

interface UseProductFiltersReturn {
  filteredProducts: Product[];
  filters: ProductFilter;
  setCategory: (category: ProductCategory | null) => void;
  setRiskLevel: (riskLevel: Product['riskLevel'] | null) => void;
  setMinimumAmount: (amount: number | null) => void;
  resetFilters: () => void;
}

export const useProductFilters = ({ initialProducts }: UseProductFiltersProps): UseProductFiltersReturn => {
  const [products] = useState<Product[]>(initialProducts);
  const [filters, setFilters] = useState<ProductFilter>({});

  const setCategory = useCallback((category: ProductCategory | null) => {
    setFilters((prev: ProductFilter) => ({ ...prev, category: category || undefined }));
  }, []);

  const setRiskLevel = useCallback((riskLevel: Product['riskLevel'] | null) => {
    setFilters((prev: ProductFilter) => ({ ...prev, riskLevel: riskLevel || undefined }));
  }, []);

  const setMinimumAmount = useCallback((amount: number | null) => {
    setFilters((prev: ProductFilter) => ({ ...prev, minimumAmount: amount || undefined }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({});
  }, []);

  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    if (filters.riskLevel && product.riskLevel !== filters.riskLevel) {
      return false;
    }
    if (filters.minimumAmount && product.minimumAmount < filters.minimumAmount) {
      return false;
    }
    return true;
  });

  return {
    filteredProducts,
    filters,
    setCategory,
    setRiskLevel,
    setMinimumAmount,
    resetFilters,
  };
}; 