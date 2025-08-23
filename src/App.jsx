import React, { useState } from 'react';
import { CheckSquare, Calendar, BarChart3, Settings, User, LogOut } from 'lucide-react';
import TaskList from './components/TaskList';
import AuthPage from './components/Auth/AuthPage';
import { Button } from './components/ui/Button';
import { authApi } from './services/api';

function App() {
  const [showTaskList, setShowTaskList] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(authApi.isAuthenticated());

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    authApi.logout();
    setIsAuthenticated(false);
    setShowTaskList(false);
  };

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
                <p className="text-sm text-gray-600">Task Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Manage Tasks Efficiently
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Task management system. 
            Create, organize, and track tasks.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <CheckSquare className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Task Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Create, edit, and delete tasks in the interface. 
              Mark tasks as complete and stay organized.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Filtering</h3>
            <p className="text-gray-600 leading-relaxed">
              Filter tasks by status - view all tasks, only active ones, 
              or completed tasks.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Track progress with visual indicators and counters. 
              See how many tasks have been completed and what's remaining.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Organized?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start managing tasks. 
            Stay organized and productive.
          </p>
          <Button
            size="lg"
            onClick={() => setShowTaskList(true)}
            className="text-lg px-8 py-4"
          >
            <CheckSquare className="w-5 h-5 mr-2" />
            Check Tasklist
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 TaskFlow. Built with React and modern web technologies.
            </p>
          </div>
        </div>
      </footer>

      {/* Task List Modal */}
      <TaskList
        isOpen={showTaskList}
        onClose={() => setShowTaskList(false)}
      />
    </div>
  );
}

export default App;
