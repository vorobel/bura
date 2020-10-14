import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import FuncComp from '../funcComponent/funcComp';

const App = () => {
    
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1, done: false },
    { label: 'Make Awesome App', important: true, id: 2, done: false  },
    { label: 'Have a lunch', important: false, id: 3, done: false  }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
      <FuncComp todos={todoData}/>
    </div>
  );
}

export default App;