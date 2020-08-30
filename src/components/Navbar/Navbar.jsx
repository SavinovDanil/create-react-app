import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	console.log(props)
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
			</div>
			<div className={s.friends}>
				<div>Friends:</div>
				<div>
					<ul>
						<li>
							<span className={s.name}>
								<span>{props.state.friends[0].name}</span>
							</span>
						</li>
						<li>
							<span className={s.name}>
								<span>{props.state.friends[1].name}</span>
							</span>
						</li>
						<li>
							<span className={s.name}>
								<span>{props.state.friends[2].name}</span>
							</span>
						</li>
						<li>
							<span className={s.name}>
								<span>{props.state.friends[3].name}</span>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;