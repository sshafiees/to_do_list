'use client';
import React, { useMemo, useState } from 'react';
import Search from '../components/search';
import Filters from '../components/filters';
import Overview from '../components/overview';
import TasksList from '../components/tasks';
import { taskList } from '../mocks/tasks';
import type { TaskItemType, StatusType, PriorityType } from '../types/tasks';

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('latest');

  const filteredTasks = useMemo(() => {
    const needle = searchText.trim().toLowerCase();
    const result = (taskList as TaskItemType[]).filter(task => {
      if (categoryFilter !== 'all' && task.category !== categoryFilter)
        return false;
      if (priorityFilter !== 'all' && task.priority !== priorityFilter)
        return false;
      if (statusFilter !== 'all' && task.status !== statusFilter) return false;
      if (!needle) return true;
      return (
        task.title.toLowerCase().includes(needle) ||
        task.description.toLowerCase().includes(needle)
      );
    });
    result.sort((a, b) => {
      if (sortOption === 'latest') {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      if (sortOption === 'oldest') {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
      return 0;
    });
    return result;
  }, [searchText, categoryFilter, priorityFilter, statusFilter, sortOption]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <div className="container h-full">
        <div className="grid gap-4">
          <Filters
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Overview taskList={filteredTasks} />
          {filteredTasks.length === 0 ? (
            <div className="text-center text-sm text-gray-500">
              هیچ موردی یافت نشد
            </div>
          ) : (
            <TasksList taskList={filteredTasks} />
          )}
        </div>
      </div>
    </div>
  );
}
