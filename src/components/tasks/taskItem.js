import Block from '../layout/block';
import Chip from '../ui/chip.js';
import { priorityChip, statusChip } from '@/constants/tasks';
import {
  PencilSquareIcon,
  TrashIcon,
  CalendarIcon,
  MapPinIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';

export default function TaskItem({
  taskId,
  title,
  description,
  dueDate,
  createdAt,
  priority,
  status,
  category,
  comments = 0,
}) {
  const priorityTag = priorityChip[priority] || {};
  const statusTag = statusChip[status] || {};

  return (
    <Block>
      <div className="flex justify-between">
        <div className="flex gap-2 mb-2">
          <h3 className="font-bold">{title}</h3>

          <Chip
            label={priorityTag.label}
            color={priorityTag.color}
            textColor={priorityTag.textColor}
          />

          <Chip
            label={statusTag.label}
            color={statusTag.color}
            textColor={statusTag.textColor}
          />
        </div>

        <div className="flex">
          <PencilSquareIcon className="h-5 w-5 text-gray-500 mx-2" />
          <TrashIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <p className="mb-2">{description}</p>

      <div className="flex flex-wrap items-center justify-start gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4" />
          <span>{category}</span>
        </div>

        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>
            {createdAt ? new Date(createdAt).toLocaleDateString('fa-IR') : ''}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>
            {dueDate ? new Date(dueDate).toLocaleDateString('fa-IR') : ''}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <ChatBubbleLeftIcon className="h-4 w-4" />
          <span>{comments} نظر</span>
        </div>
      </div>
    </Block>
  );
}
