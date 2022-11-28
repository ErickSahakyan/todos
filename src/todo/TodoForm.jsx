import { useState } from "react";

const TodoForm = ({ onAdd }) => {
	const [text, setText] = useState("");
	return (
		<form
			className="form"
			onSubmit={(e) => {
				e.preventDefault();
				onAdd(text);
				setText("");
			}}
		>
			<input
				className="form__input"
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button className="form__button">Add</button>
		</form>
	);
};

export default TodoForm;
