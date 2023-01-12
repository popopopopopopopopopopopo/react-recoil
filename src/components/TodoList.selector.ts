import { selector } from 'recoil';
import { todoListState } from './TodoList.atom';

export const todoListStatesCounter = selector({
    key: 'todoListStatesCounter',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        return totalNum;
    },
});
