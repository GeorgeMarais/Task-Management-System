import React from 'react';
import { TaskList } from './components/TaskList';

/**
 * Main App component
 */
const App = () => {
    return (
      <div className="App">
        <h1>Task Management System</h1>
        <TaskList />
      </div>
    );
  };
  
  export default App;