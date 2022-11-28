import TodoItem from "./TodoItem";
import './../../App.css';

const TodoList = ({ todos, onChange, onDelete }) => {
	return (
		<div className="list">
			{todos.map((todo) => {
				return <TodoItem todo={todo} onChange={onChange} onDelete={onDelete} />;
			})}
		</div>
	);
};

export default TodoList;
