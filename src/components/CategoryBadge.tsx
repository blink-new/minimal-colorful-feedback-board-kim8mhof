import { FeedbackCategory, CATEGORY_LABELS, CATEGORY_COLORS } from '../lib/types';
import { cn } from '../lib/utils';

interface CategoryBadgeProps {
  category: FeedbackCategory;
  className?: string;
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        CATEGORY_COLORS[category],
        className
      )}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}