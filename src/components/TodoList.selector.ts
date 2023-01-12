import { selector } from 'recoil';
import { todoListState, todoListFilterState } from './TodoList.atom';

export const todoListStatesCounter = selector({
    key: 'todoListStatesCounter',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
        };
    },
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case '完了':
                return list.filter((item) => item.isComplete);
            case '未完了':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});
