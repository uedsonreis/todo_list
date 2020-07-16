import { Task } from './task';

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

type Action = { type: string, payload: Task };

export const creators = {
    createCreate: (task: Task) => ({ type: CREATE, payload: task }),
    createUpdate: (task: Task) => ({ type: UPDATE, payload: task }),
    createDelete: (task: Task) => ({ type: DELETE, payload: task }),
};

const initialState: Task[] = [];

export function reducer(todoList = initialState, action: any) {
    const { type, payload } = action as Action;
    switch(type) {
        case CREATE: {
            const lastId = (todoList.length > 0) ? todoList[todoList.length].id! : todoList.length
            const task = { ...payload, id: lastId + 1 };
            return [ ...todoList, task ];
        }
        case UPDATE: {
            const task: Task | undefined = todoList.find(todo => todo.id === payload.id);
            if (task) {
                task.text = payload.text;
                task.isDone = payload.isDone;
            }
            return todoList;
        };
        case DELETE: {
            return todoList.filter(todo => todo.id !== payload.id);
        };
        default: return todoList;
    }
}