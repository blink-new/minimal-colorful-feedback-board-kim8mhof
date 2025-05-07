import { useState } from 'react';
import { ChevronDown, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SortOption } from '../lib/storage';

interface SortSelectorProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function SortSelector({ currentSort, onSortChange }: SortSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'most-votes', label: 'Most Votes' },
    { value: 'least-votes', label: 'Least Votes' },
  ];

  const currentLabel = sortOptions.find(option => option.value === currentSort)?.label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 
                  rounded-lg shadow-sm hover:shadow transition-shadow text-sm"
        aria-haspopup="listbox"
      >
        <ArrowUpDown size={14} className="text-gray-500 dark:text-gray-400" />
        <span className="text-gray-700 dark:text-gray-300">{currentLabel}</span>
        <ChevronDown size={14} className="text-gray-500 dark:text-gray-400" />
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
            
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg 
                        shadow-lg py-1 z-50"
              role="listbox"
            >
              {sortOptions.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={currentSort === option.value}
                  onClick={() => {
                    onSortChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 text-sm cursor-pointer transition-colors
                            ${currentSort === option.value 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                            }`}
                >
                  {option.label}
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}