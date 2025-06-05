export type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

export type TodoList = {
    todos: Todo[];
    filter: 'all' | 'active' | 'completed';
}
