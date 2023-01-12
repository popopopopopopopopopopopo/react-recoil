import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './TodoList.atom';

let id = 1;
function _getId() {
    return id++;
}

function TodoItemCreator() {
    const [title, setTitle] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (e:any) => {
        setTitle(e.target.value);
    };

    const addItem = (e:any) => {
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

    return (
        <div style={{ margin: '1em 0' }}>
            <input type="text" value={title} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

export default TodoItemCreator;
