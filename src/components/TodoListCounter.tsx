import { useRecoilValue } from 'recoil';
import { todoListStatesCounter } from './TodoList.selector';

function TodoListStats() {
    const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(todoListStatesCounter);
    return (
        <ul>
            <li>Todoの登録数:{totalNum}</li>
            <li>完了の数:{totalCompletedNum}</li>
            <li>未完了の数:{totalUncompletedNum}</li>
        </ul>
    );
}

export default TodoListStats;
