import {atom, selector, useRecoilRefresher_UNSTABLE, useRecoilValue} from 'recoil';
import { todoListState } from "./TodoList.atom";
import { todoListStatesCounter } from "./TodoList.selector";
import TodoListCounter from "./TodoListCounter";

function TodoList() {
    const todoList = useRecoilValue(todoListState);
    const totalNum = useRecoilValue(todoListStatesCounter)
    console.log(todoList);
    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <ul>
                <li>Todoの登録数:{totalNum}</li>
            </ul>
            <TodoListCounter />
            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    );
}

export default TodoList;
