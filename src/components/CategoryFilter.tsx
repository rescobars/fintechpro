import { categories } from '@/data/products';
import { ProductCategory, CategoryFilterProps } from '@/types/product';
import Button from './styled/Button';

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const handleCategoryChange = (category: ProductCategory | null) => {
    onCategoryChange(category);
  };

  return (
    <div 
      className="flex flex-wrap gap-2 justify-center mb-8"
      role="group"
      aria-label="Filtro de categorías"
    >
      <Button
        variant={selectedCategory === null ? 'primary' : 'secondary'}
        onClick={() => handleCategoryChange(null)}
        className="rounded-full"
        aria-pressed={selectedCategory === null}
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'primary' : 'secondary'}
          onClick={() => handleCategoryChange(category)}
          className="rounded-full"
          aria-pressed={selectedCategory === category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter; 