export interface TaskItem {
  id: number;
  title: string;
  dueDate: string;
  completedAtDate?: string;
  assigneeName: string;
  description?: string;
}
