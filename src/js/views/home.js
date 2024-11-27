import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();

	const [users, setUsers] = useState([]);

	const getUsers = () => {
		fetch('https://playground.4geeks.com/todo/users?offset=0&limit=100')
			.then(resp => resp.json())
			.then(respJson => {
				console.log(respJson);
				const users = respJson.users;
				const promises = users.map((user) =>
					fetch(`https://playground.4geeks.com/todo/users/${user.name}`)
						.then(resp => resp.json()));
				Promise.all(promises).then(users => setUsers(users));
			})
	}

	const deleteUser = (username) => {
		// users.filter(user => user.id !== userId) // Todos los usuarios menos el id
		fetch(`https://playground.4geeks.com/todo/users/${username}`, {
			method: 'DELETE',
			headers: {
				
			}
		}).then(resp => {
			if (resp.ok) {
				setUsers(users.filter(user => user.name !== username))
			}
		})
	}

	useEffect(() => {
		getUsers()
	}, []);


	return (
		<div className="text-center mt-5">
			<h1>Listado de usuarios</h1>
			<ul>
				{
					users.map((user) => (
						<li key={user.name}>
							<Link to={`/user/${user.name}`}>
								{user.name} {user.todos.length}
							</Link>
							<i onClick={() => deleteUser(user.name)} className="ms-5 fa fa-trash"></i>
						</li>
					))
				}
			</ul>
		</div>
	)
};
