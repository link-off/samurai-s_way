import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContaner from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

type PropsType = {
  profile: ProfileType | null,
  status: string,
  updateStatus: (status: string) => void,
  isOwner: boolean,
  savePhoto: (file: File) => void,
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus} />
      <MyPostsContaner />
    </div>
  )
}

export default Profile;
