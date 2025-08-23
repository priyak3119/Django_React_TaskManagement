import React from 'react';
import { Button } from './ui/Button';

export const TaskFilters = ({ activeFilter, onFilterChange, taskCounts }) => {
  // Define the filter buttons
  const filters = [
    { key: 'all', label: 'All Tasks', count: taskCounts.all },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilter === filter.key ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onFilterChange(filter.key)}
          className="flex items-center space-x-2"
        >
          <span>{filter.label}</span>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              activeFilter === filter.key
                ? 'bg-white bg-opacity-20'
                : 'bg-gray-100'
            }`}
          >
            {filter.count}
          </span>
        </Button>
      ))}
    </div>
  );
};
