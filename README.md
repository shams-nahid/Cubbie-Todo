# React To-Do App

A minimal client-side to-do application built with React demonstrating fundamental React concepts.

## How to Run Locally

### Prerequisites

- **Node.js**: v22.15.0 (or compatible version)
- **npm**: 10.9.2

### To Run App

```bash
npm install
npm start
```

The app will automatically open in your browser at `http://localhost:3000`.

### To Run Test

```bash
npm run test
```

## React + Tooling Choice

**Create React App** - Chosen for rapid development setup and built-in TypeScript support.

## Project Decisions

- Followed suggested component structure from requirements (Header, TaskInput, TaskList, TaskItem)
- Implemented minimal CSS without external libraries per requirements to keep dependencies light
- Used Date.now() for task IDs (acceptable for demo purposes, would use UUID library in production)
- Selected TypeScript over JavaScript for better type safety and development experience
- Implemented unit tests for utility functions to demonstrate testing approach while keeping test suite lightweight per requirements
