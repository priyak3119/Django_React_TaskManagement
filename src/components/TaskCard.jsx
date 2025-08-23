import React from 'react';
import { Edit2, Trash2, Check, RotateCcw } from 'lucide-react';
import { Button } from './ui/Button';

export const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${
        task.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3
              className={`font-semibold text-lg mb-2 ${
                task.completed ? 'text-green-800 line-through' : 'text-gray-900'
              }`}
            >
              {task.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                task.completed ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              {task.description}
            </p>
          </div>
          <div
            className={`flex-shrink-0 ml-4 p-2 rounded-full ${
              task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}
          >
            {task.completed ? (
              <Check className="w-5 h-5" />
            ) : (
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            {new Date(task.updatedAt).toLocaleDateString()}
          </span>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleComplete(task.id)}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              {task.completed ? <RotateCcw className="w-4 h-4" /> : <Check className="w-4 h-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(task)}
              className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
            >
              <Edit2 className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(task.id)}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
