'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface PlayfulTodolistProps {
  todos?: Todo[];
}

const DEFAULT_TODOS: Todo[] = [
  { id: 1, text: "Fine-tuning LLMs for document intelligence", completed: false },
  { id: 2, text: "Building production-grade RAG pipelines", completed: false },
  { id: 3, text: "Edge AI & model quantization for deployment", completed: false },
];

export const PlayfulTodolist: React.FC<PlayfulTodolistProps> = ({ todos: initialTodos }) => {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodos || DEFAULT_TODOS);

  const toggleTodo = (id: number) => {
    setTodos((prev) => 
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer py-1"
            onClick={() => toggleTodo(todo.id)}
          >
            {/* Checkbox */}
            <div className={`relative w-8 h-8 rounded-lg border-2 border-[#d95f3b] flex items-center justify-center transition-all duration-300 
              ${todo.completed ? 'bg-[#d95f3b] scale-95 shadow-inner' : 'bg-transparent hover:bg-[#d95f3b]/10'}`}>
              <AnimatePresence>
                {todo.completed && (
                  <motion.span
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1.1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 45 }}
                    className="material-symbols-outlined text-[#f0e8d8] text-xl font-bold"
                  >
                    check
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            
            {/* Todo Text with Underline */}
            <div className="relative pt-1">
              <span className={`font-hand text-[26px] md:text-3xl transition-all duration-500 block leading-tight
                ${todo.completed ? 'opacity-100 completed-text drop-shadow-sm' : 'opacity-60 hover:opacity-80'}`}>
                {todo.text}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
