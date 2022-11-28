import { useReducer } from "react";

import './App.css'
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList/TodoList";
import TodoFooter from "./todo/TodoFooter";
import reducer from "./todo/TodoList/TodoReducer/reducer";


export default function App() {
	const [todos, dispatch] = useReducer(reducer, [
		{
			id: Math.random(),
			text: "Learn JS",
			isCompleted: false
		},
		{
			id: Math.random(),
			text: "Learn CSS",
			isCompleted: false
		},
		{
			id: Math.random(),
			text: "Learn React",
			isCompleted: false
		}
	]);

	return (
		<div className="App">
			<p className="todos">TODOS</p>
			<TodoForm
				onAdd={(text) => {
					dispatch({
						type: "add",
						payload: {
							text: text
						}
					});
				}}
			/>
			<TodoList
				todos={todos}
				onChange={(newTodo) => {
					dispatch({
						type: "change",
						payload: {
							newTodo: newTodo,
							id: newTodo.id
						}
					});
				}}
				onDelete={(todo) => {
					dispatch({
						type: "delete",
						payload: {
							id: todo.id
						}
					});
				}}
			/>
			<TodoFooter
				todos={todos}
				onClearCompleted={() => {
					dispatch({
						type: "clear"
					});
				}}
			/>
		</div>
	);
}
