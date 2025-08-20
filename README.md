# React To-Do App

A minimal client-side to-do application built with React demonstrating fundamental React concepts.

## How to Run Locally

### Prerequisites

- **Node.js**: v22.15.0
- **npm**: 10.9.2

### To Run Locally

```bash
npm install
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`.

## React + Tooling Choice

**Create React App** - Chosen for rapid development setup and built-in TypeScript support.

## Project Decisions

- Chose Create React App for rapid development setup and zero-configuration TypeScript support
- Used TypeScript for type safety and better developer experience throughout the application
- Implemented minimal CSS without external libraries per requirements to keep dependencies light
- Used Date.now() for task IDs (acceptable for demo purposes, would use UUID library in production)
- Followed suggested component structure from requirements (Header, TaskInput, TaskList, TaskItem)
