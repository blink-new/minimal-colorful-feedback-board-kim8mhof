# Minimal Colorful Feedback Board

A lightweight, beautiful feedback collection board built with React, Vite, and Tailwind CSS.

![Feedback Board Screenshot](https://storage.googleapis.com/blink-451505.firebasestorage.app/screenshots/3000-isbxa0kgf2s44e15d79u3-1893687b.blink.new-1746571850105.png)

## 🌟 Features

- **Simple & Intuitive**: Clean interface focused on core functionality
- **Colorful Cards**: Each idea gets a unique pastel background color
- **Local Storage**: All feedback persists between sessions
- **Responsive Design**: Works on all device sizes
- **Smooth Animations**: Delightful micro-interactions throughout

## 🚀 Core Functionality

1. **View Feedback**: See all submitted ideas in a vertical list
2. **Add Ideas**: Click the floating "+" button to open a modal and submit new ideas
3. **Vote**: Support ideas you like with a simple voting system

## 🛠️ Technology Stack

- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Fast development environment
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **React Router**: Navigation
- **LocalStorage API**: Client-side persistence

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FeedbackBoard.tsx    # Main board component
│   ├── FeedbackCard.tsx     # Individual idea card
│   └── AddFeedbackModal.tsx # Modal for adding new ideas
├── lib/
│   ├── storage.ts           # LocalStorage utilities
│   ├── types.ts             # TypeScript interfaces
│   └── utils.ts             # Helper functions
└── App.tsx                  # Main app with routing
```

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit `http://localhost:3000/feedback` in your browser

## 🎨 Customization

- Modify the pastel colors in `src/lib/storage.ts` to change the card background options
- Adjust the styling in the component files to match your brand
- Extend functionality by adding features like sorting, filtering, or categories

## 📱 Live Demo

Check out the live demo: [Minimal Colorful Feedback Board](https://minimal-colorful-feedback-board-kim8mhof.live.blink.new)

## 📝 License

MIT