import { motion } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';
import { FeedbackItem } from '../lib/types';
import { cn } from '../lib/utils';

interface FeedbackCardProps {
  item: FeedbackItem;
  onVote: (id: string) => void;
}

export default function FeedbackCard({ item, onVote }: FeedbackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-lg p-4 shadow-sm transition-all duration-200',
        'hover:shadow-md hover:translate-y-[-2px]',
        item.color
      )}
    >
      <h3 className="text-lg font-medium mb-2 text-gray-800">{item.title}</h3>
      
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-medium text-gray-600">
          {item.votes} {item.votes === 1 ? 'vote' : 'votes'}
        </span>
        
        <button
          onClick={() => onVote(item.id)}
          className="flex items-center gap-1 px-3 py-1.5 bg-white/70 hover:bg-white 
                    rounded-full text-sm font-medium text-gray-700 transition-colors
                    shadow-sm hover:shadow"
        >
          <ThumbsUp size={14} />
          <span>Vote</span>
        </button>
      </div>
    </motion.div>
  );
}