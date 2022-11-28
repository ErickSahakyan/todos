const TodoFooter = ({ todos, onClearCompleted }) => {
	const completedSize = todos.filter((todo) => todo.isCompleted).length;
	return (
		<div>
			<span className="footer__text">
				{completedSize}/{todos.length} Completed
			</span>
			<button className="footer__button" onClick={onClearCompleted}>
				Clear Completed
			</button>
		</div>
	);
};
export default TodoFooter;