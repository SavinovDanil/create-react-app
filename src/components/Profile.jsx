import React from 'react';
import s from'./Profile.module.css'

const Profile = () => {
	return (
		<div className= {s.content}>
			<div>
				<img src='https://saletur.ru/galery/tfoto/big/043/73/437321.jpg'></img>
			</div>
			<div>
				Savinov D.
        	</div>
			<div>
				my posts
          		<div>
					New post;
          		<div>
						<div className = {s.item}>
							post1
         			</div>
						<div className = {s.item}>
							post2
          			</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;