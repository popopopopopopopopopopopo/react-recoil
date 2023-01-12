import { useRecoilValue } from 'recoil';
import { todoListStatesCounter } from './TodoList.selector';

function TodoListStats() {
    const totalNum = useRecoilValue(todoListStatesCounter);
    return (
        <ul>
            <li>Todoの登録数:{totalNum} from 別コンポーネントからの呼び出し</li>
        </ul>
    );
}

export default TodoListStats;
