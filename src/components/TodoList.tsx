import { useState} from "react";
import { useRecoilValue, useRecoilState } from 'recoil';
import { todoListState } from "./TodoList.atom";
import { todoListStatesCounter } from "./TodoList.selector";
import TodoListCounter from "./TodoListCounter";

let id = 1;
const _getId = () => {
    return id++;
}

function TodoList() {
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const totalNum = useRecoilValue(todoListStatesCounter)

    const handleChange = (e:any) => {
        setTitle(e.target.value);
    };

    const addItem = (e: any) => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: _getId(),
                title: title,
                isComplete: false,
            },
        ]);
        setTitle('');
    };

    console.log(todoList);
    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <ul>
                <li>Todoの登録数:{totalNum}</li>
            </ul>
            <TodoListCounter />
            <div style={{ margin: '1em 0' }}>
                <input type="text" value={title} onChange={handleChange} />
                <button onClick={addItem}>Add</button>
            </div>
            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    );
}

export default TodoList;
