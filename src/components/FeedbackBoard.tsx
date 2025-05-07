import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import FeedbackCard from './FeedbackCard';
import AddFeedbackModal from './AddFeedbackModal';
import { FeedbackItem } from '../lib/types';
import { getFeedbackItems, addFeedbackItem, voteFeedbackItem } from '../lib/storage';

export default function FeedbackBoard() {
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load items from localStorage on component mount
  useEffect(() => {
    setItems(getFeedbackItems());
  }, []);

  // Handle voting for an item
  const handleVote = (id: string) => {
    const updatedItems = voteFeedbackItem(id);
    setItems(updatedItems);
  };

  // Handle adding a new item
  const handleAddItem = (title: string) => {
    const newItem = addFeedbackItem(title);
    setItems([newItem, ...items]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Feedback Board
          </h1>
          <p className="text-gray-600">
            Share your ideas and vote for the ones you like!
          </p>
        </header>

        {/* Feedback items list */}
        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 bg-white/50 rounded-lg shadow-sm">
              <p className="text-gray-500">No ideas yet. Be the first to add one!</p>
            </div>
          ) : (
            items.map(item => (
              <FeedbackCard 
                key={item.id} 
                item={item} 
                onVote={handleVote} 
              />
            ))
          )}
        </div>

        {/* Floating add button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full 
                    flex items-center justify-center shadow-lg hover:bg-blue-600 
                    transition-colors"
          aria-label="Add new idea"
        >
          <Plus size={24} />
        </motion.button>

        {/* Add feedback modal */}
        <AddFeedbackModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddItem}
        />
      </div>
    </div>
  );
}