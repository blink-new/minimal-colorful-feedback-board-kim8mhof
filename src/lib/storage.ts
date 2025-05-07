import { FeedbackItem } from './types';

const STORAGE_KEY = 'feedback-board-items';

// Available pastel colors for feedback cards
export const PASTEL_COLORS = [
  'bg-pink-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-purple-100',
  'bg-yellow-100',
  'bg-indigo-100',
  'bg-red-100',
  'bg-orange-100',
  'bg-teal-100',
];

// Get a random pastel color
export const getRandomPastelColor = (): string => {
  const randomIndex = Math.floor(Math.random() * PASTEL_COLORS.length);
  return PASTEL_COLORS[randomIndex];
};

// Get all feedback items from localStorage
export const getFeedbackItems = (): FeedbackItem[] => {
  const items = localStorage.getItem(STORAGE_KEY);
  return items ? JSON.parse(items) : [];
};

// Save all feedback items to localStorage
export const saveFeedbackItems = (items: FeedbackItem[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

// Add a new feedback item
export const addFeedbackItem = (title: string): FeedbackItem => {
  const items = getFeedbackItems();
  const newItem: FeedbackItem = {
    id: crypto.randomUUID(),
    title,
    votes: 0,
    color: getRandomPastelColor(),
    createdAt: Date.now(),
  };
  
  const updatedItems = [newItem, ...items];
  saveFeedbackItems(updatedItems);
  return newItem;
};

// Vote for a feedback item
export const voteFeedbackItem = (id: string): FeedbackItem[] => {
  const items = getFeedbackItems();
  const updatedItems = items.map(item => 
    item.id === id ? { ...item, votes: item.votes + 1 } : item
  );
  saveFeedbackItems(updatedItems);
  return updatedItems;
};