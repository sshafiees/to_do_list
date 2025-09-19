import React from 'react';
import TaskItem from './taskItem';
import { TaskItemProps } from '../../types/taks';

type TasksListProps = {
  taskList: TaskItemProps[];
};
export default function TasksList({ taskList }: TasksListProps) {
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
