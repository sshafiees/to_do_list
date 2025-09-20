import { TaskItemType, StatusType } from '../types/tasks';

export const countTasksByStatus = (
  tasks: TaskItemType[],
  status: StatusType
): number => {
  return tasks.filter(task => task.status === status).length;
};
