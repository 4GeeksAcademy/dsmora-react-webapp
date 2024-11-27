import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";


import "../../styles/demo.css";

export const DetailUser = () => {
	const params = useParams();
	const [userTodos, setUserTodos] = useState([]);
	const getUserTodos = () => {
		fetch(`https://playground.4geeks.com/todo/users/${params.username}`)
			.then(resp => resp.json())
			.then(respJson => setUserTodos(respJson.todos))
	}

	useEffect(() => {
		getUserTodos();
	}, [])

	return (
		<div className="container">
			<h3>
				{'Detalle usuario'} {params.username}
			</h3>
			<ul className="list-group">
				{
					userTodos.map(todo => (
						<li key={todo.id}>
							{todo.label}
						</li>
					))
				}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
