import React, { useState } from "react";
import { profiles as initialProfiles} from './profile';

const AdminPanel = ({ onProfilesUpdate}) => {
    const [newProfile, setNewProfile] = useState({
        id: null,
        name: '',
        photo: '',
        description: '',
        address: '',
    });
    const [profiles, setProfiles] = useState(initialProfiles);
    const [isEdit, setIsEdit] = useState(false);

    const handleAddorEditProfile = () => {
        if(isEdit){
            const updatedProfiles = profiles.map(profile =>
                profile.id === newProfile.id ? newProfile : profile
            );
            setProfiles(updatedProfiles);
            onProfilesUpdate(updatedProfiles);
        } else {
            const updatedProfiles = [...profiles, {...newProfile, id: profiles.length + 1 }];
            setProfiles(updatedProfiles);
            onProfilesUpdate(updatedProfiles);
        }
        resetForm();
    };

    const handleEditProfile = (profile) => {
        setNewProfile(profile);
        setIsEdit(true);
      };
    
      // Delete a profile
      const handleDeleteProfile = (id) => {
        const updatedProfiles = profiles.filter(profile => profile.id !== id);
        setProfiles(updatedProfiles);
        onProfilesUpdate(updatedProfiles);
      };
    
      // Reset form after submission or cancellation
      const resetForm = () => {
        setNewProfile({ id: null, name: '', photo: '', description: '', address: '' });
        setIsEdit(false);
      };
    
      return (
        <div className="admin-panel">
          <h2>{isEdit ? "Edit Profile" : "Add Profile"}</h2>
          <input 
            type="text"
            placeholder="Name"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          />
          <input 
            type="text"
            placeholder="Photo Url"
            value={newProfile.photo}
            onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
          />
          <input 
            type="text"
            placeholder="Description"
            value={newProfile.description}
            onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} 
          />
          <input
            type="text"
            placeholder="Address"
            value={newProfile.address}
            onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
          />
          <button onClick={handleAddOrEditProfile}>
            {isEdit ? "Update Profile" : "Add Profile"}
          </button>
          {isEdit && <button onClick={resetForm}>Cancel Edit</button>}
    
          <h2>Manage Profiles</h2>
          <ul>
            {profiles.map(profile => (
              <li key={profile.id}>
                <div>
                  <strong>{profile.name}</strong> - {profile.description}
                </div>
                <button onClick={() => handleEditProfile(profile)}>Edit</button>
                <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default AdminPanel;