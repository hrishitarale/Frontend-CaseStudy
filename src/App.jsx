import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './ProfileList';
import MapComponent from './maps';
import AdminPanel from './adminPanel';
import Navbar from './Navbar';
import {profiles as initialProfiles} from './profile';
import './App.css';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState(initialProfiles);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) || profile.description.toLowerCase().includes(searchQuery.toLowerCase())
  ); 

  return (
    <Router>
      <div className="App">
        
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
        <Route
            path="/"
            element={
              <div className="profile-page">
                <ProfileList profiles={filteredProfiles} onProfileClick={setSelectedProfile} />
                {selectedProfile && (
                  <div className="map-container">
                    <div>{selectedProfile.name} address selected</div>
                    <MapComponent selectedProfile={selectedProfile} />
                  </div>
                )}
              </div>
            }
          />
          <Route path="/admin" element={<AdminPanel onProfilesUpdate={setProfiles} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
