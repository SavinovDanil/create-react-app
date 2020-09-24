import React from "react";
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/image/user.webp'

const Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items)
        })

        // props.setUsers([
        //     {
        //         id: 1,
        //         photoURL: 'https://thumbs.dfs.ivi.ru/storage38/contents/4/a/08e703ebd43b3d25950929910e1b6d.jpg',
        //         followed: false,
        //         fullName: 'Hi, my name is Danil',
        //         status: 'Im a boss',
        //         city: 'Moskow',
        //         country: "Russia"
        //     },
        //     {
        //         id: 2,
        //         photoURL: 'https://www.kino-teatr.ru/acter/foto/hollywood/48869.jpg',
        //         followed: true,
        //         fullName: 'Hi, my name is Ella2',
        //         status: 'Im a boss2',
        //         city: 'Moskow2',
        //         country: "Russia2"
        //     },
        //     {
        //         id: 3,
        //         photoURL: 'https://www.kino-teatr.ru/acter/foto/hollywood/48869.jpg',
        //         followed: true,
        //         fullName: 'Hi, my name is Dima3',
        //         status: 'Im a boss3',
        //         city: 'Moskow3',
        //         country: "Russia3"
        //     },
        //     {
        //         id: 4,
        //         photoURL: 'https://www.kino-teatr.ru/acter/foto/hollywood/48869.jpg',
        //         followed: false,
        //         fullName: 'Hi, my name is Vova4',
        //         status: 'Im a boss4',
        //         city: 'Moskow4',
        //         country: "Russia4"
        //     }
        // ])
    }


    return <div>
        {props.users.map(u => <div className={styles.usersBlock} key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.usersPhoto} alt='photo'/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span className={styles.sss}>
                <span className={styles.nameAndStatus}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.city'}</div>
                    <div>{'u.country'}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users