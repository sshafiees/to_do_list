'use client';
import React, { useState } from 'react';
import Search from '../components/search';
import Filters from '../components/filters';
import Overview from '../components/overview';
import TasksList from '../components/tasks'; // چون داخل پوشه tasks فایل index.tsx داری

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <div className="container h-full">
        <div className="grid gap-4">
          <Filters />
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Overview />
          <TasksList searchText={searchText} />
        </div>
      </div>
    </div>
  );
}
