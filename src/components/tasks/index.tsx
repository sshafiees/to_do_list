import React from 'react';
import TaskItem from './taskItem';
import { taskList } from '../../mocks/tasks';

export default function TasksList() {
  return (
    <div>
      {taskList.map(task => (
        <TaskItem
          key={task.taskId}
          taskId={task.taskId}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          createdAt={task.createdAt}
          priority={task.priority}
          status={task.status}
          category={task.category}
        />
      ))}
    </div>
  );
}
