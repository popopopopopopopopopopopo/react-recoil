import { useRecoilValue, useRecoilState } from 'recoil';
import { todoListState,todoListFilterState } from "./TodoList.atom";
import { todoListStatesCounter, filteredTodoListState } from "./TodoList.selector";
import TodoListCounter from "./TodoListCounter";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilter from "./TodoListFilter";

let id = 1;
const _getId = () => {
    return id++;
}

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
    const todoCounter = useRecoilValue(todoListStatesCounter)
    const [filter, setFilter] = useRecoilState(todoListFilterState);
    const handleChange = (e: any) => {
        setFilter(e.target.value);
    };

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <ul>
                <li>Todoの登録数:{todoCounter.totalNum}</li>
            </ul>
            <TodoListCounter />
            <TodoListFilter />
            <TodoItemCreator />
            {todoList.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </>
    );
}

export default TodoList;
