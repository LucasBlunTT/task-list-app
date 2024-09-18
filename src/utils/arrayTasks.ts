// Definindo a interface para cada tarefa
export interface Task {
  id: string;
  taskName: string;
  taskTime: string;
  completo: boolean;
}

export const arrayTasks: Task[] = [
  {
    id: '1',
    taskName: 'Design Meeting',
    taskTime: '10:00 AM',
    completo: false,
  },
  {
    id: '2',
    taskName: 'Project Review',
    taskTime: '11:30 AM',
    completo: false,
  },
  {
    id: '3',
    taskName: 'Lunch Break',
    taskTime: '1:00 PM',
    completo: true,
  },
  {
    id: '4',
    taskName: 'Development Sync',
    taskTime: '3:00 PM',
    completo: false,
  },
];
