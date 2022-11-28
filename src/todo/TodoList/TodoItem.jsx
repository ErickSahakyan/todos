import './../../App.css';

const TodoItem = ({ todo, onDelete, onChange }) => {
	return (
		<div className="list__item">
			<input
				className="checkbox"
				type="checkbox"
				checked={todo.isCompleted}
				onChange={(e) => {
					onChange({
						...todo,
						isCompleted: e.target.checked
					});
				}}
			/>
			<span className="text">{todo.text}</span>

			<button
				className="button"
				onClick={() => {
					onDelete(todo);
				}}
			>
				X
			</button>
		</div>
	);
};

export default TodoItem;
