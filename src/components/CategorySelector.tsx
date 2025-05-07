import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackCategory, CATEGORY_LABELS } from '../lib/types';

interface CategorySelectorProps {
  selectedCategory: FeedbackCategory;
  onCategoryChange: (category: FeedbackCategory) => void;
}

export default function CategorySelector({ 
  selectedCategory, 
  onCategoryChange 
}: CategorySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories: FeedbackCategory[] = [
    'feature', 'bug', 'improvement', 'question', 'other'
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 
                  dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-left
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <span className="text-gray-700 dark:text-gray-300">
          {CATEGORY_LABELS[selectedCategory]}
        </span>
        <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 
                        rounded-lg shadow-lg overflow-hidden"
            >
              <ul className="py-1 max-h-60 overflow-auto">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 flex items-center justify-between cursor-pointer
                              hover:bg-gray-100 dark:hover:bg-gray-700
                              ${selectedCategory === category 
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                                : 'text-gray-700 dark:text-gray-300'}`}
                  >
                    {CATEGORY_LABELS[category]}
                    {selectedCategory === category && (
                      <Check size={16} className="text-blue-600 dark:text-blue-400" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}