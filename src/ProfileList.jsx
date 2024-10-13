import React from "react";
import { profiles } from "./profile";

const ProfileList = ({onProfileClick}) =>{
    return (
        <div className="profile-list">
            {profiles.map(profile =>(
                <div key={profile.id} className="profile-card">
                    <img src={profile.photo} alt={profile.name} />
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                    <button onClick={()=> onProfileClick(profile)}>Summary</button>
                </div>
            ))}
        </div>
    );
};

export default ProfileList;
