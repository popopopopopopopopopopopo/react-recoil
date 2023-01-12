import { useRecoilState } from 'recoil';
import { todoListFilterState } from './TodoList.atom';

function TodoListFilter() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const handleChange = (e: any) => {
        setFilter(e.target.value);
    };
    return (
        <>
            <select value={filter} onChange={handleChange}>
                <option value="すべて">すべて</option>
                <option value="完了">完了</option>
                <option value="未完了">未完了</option>
            </select>
        </>
    );
}
export default TodoListFilter
