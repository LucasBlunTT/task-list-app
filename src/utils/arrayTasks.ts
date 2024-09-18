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
  {
    id: '5',
    taskName: 'End of Day Wrap-up',
    taskTime: '5:00 PM',
    completo: true,
  },
  {
    id: '6',
    taskName: 'Team Stand-up',
    taskTime: '9:00 AM',
    completo: false,
  },
  {
    id: '7',
    taskName: 'Code Review',
    taskTime: '2:00 PM',
    completo: false,
  },
  {
    id: '8',
    taskName: 'Client Call',
    taskTime: '4:00 PM',
    completo: false,
  },
  {
    id: '9',
    taskName: 'Prepare Presentation',
    taskTime: '6:00 PM',
    completo: false,
  },
  {
    id: '10',
    taskName: 'Fitness Time',
    taskTime: '7:30 PM',
    completo: true,
  },
];
