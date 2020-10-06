import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";
import userPhoto from "../../../../assets/image/user.webp"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://saletur.ru/galery/tfoto/big/043/73/437321.jpg'></img>
            </div>
            <div className={s.user}>
                <div>
					<img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/></div>
				<div className={s.info}>
					<ul>
							<li>обо мне: {props.profile.aboutMe != null ? props.profile.aboutMe : "не написали"}</li>
							<li>facebook: {props.profile.contacts.facebook != null ? props.profile.contacts.facebook : "не написали"}</li>
							<li>вк: {props.profile.contacts.vk != null ? props.profile.contacts.vk : "не написали"}</li>
							<li>Инстраграмм: {props.profile.contacts.instagram != null ? props.profile.contacts.instagram : "не написали"}</li>
							<li>Работа: {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : "не написали"}</li>
							<li>полное имя: {props.profile.fullName != null ? props.profile.fullName : "не написали"}</li>
					</ul>
				</div>
            </div>
        </div>
    );
}

export default ProfileInfo;