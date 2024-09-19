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
];
