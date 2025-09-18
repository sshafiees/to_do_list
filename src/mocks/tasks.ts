import { TaskItemProps } from '../types/taks';

export const taskList: TaskItemProps[] = [
  {
    taskId: '1',
    title: 'Learn React',
    description: 'Understand the basics of React.',
    dueDate: new Date('2023-09-30'),
    createdAt: new Date('2023-09-01'),
    priority: 'high',
    status: 'inProgress',
    category: 'personal',
  },
  {
    taskId: '2',
    title: 'Build a Todo App',
    description: 'Create a simple todo app using React.',
    dueDate: new Date('2023-10-15'),
    createdAt: new Date('2023-09-05'),
    priority: 'medium',
    status: 'todo',
    category: 'work',
  },
  {
    taskId: '3',
    title: 'Write Tests',
    description: 'Write unit tests for the todo app.',
    dueDate: new Date('2023-10-20'),
    createdAt: new Date('2023-09-10'),
    priority: 'low',
    status: 'todo',
    category: 'work',
  },
  {
    taskId: '4',
    title: 'Deploy the App',
    description: 'Deploy the todo app to production.',
    dueDate: new Date('2023-10-25'),
    createdAt: new Date('2023-09-15'),
    priority: 'high',
    status: 'todo',
    category: 'work',
  },
];
