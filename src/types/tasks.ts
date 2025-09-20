export type StatusType = 'inProgress' | 'notStarted' | 'done';

export type PriorityType = 'low' | 'medium' | 'high';

export type TaskItemType = {
  taskId: string;
  title: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  priority: PriorityType;
  status: StatusType;
  category: string;
};
