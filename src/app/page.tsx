'use client';
import React, { useState } from 'react';
import Search from '../components/search';
import Filters from '../components/filters';
import Overview from '../components/overview';
import TasksList from '../components/tasks'; // چون داخل پوشه tasks فایل index.tsx داری
import { taskList } from '../components/mocks/tasks';
export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const filteredTasks = taskList.filter(task =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <div className="container h-full">
        <div className="grid gap-4">
          <Filters />
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Overview />
          <TasksList taskList={filteredTasks} />
        </div>
      </div>
    </div>
  );
}
