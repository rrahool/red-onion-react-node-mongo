import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../auth/useAuth';
import './UserProfile.css'

const UserProfile = () => {

  const { user, getUserProfile } = useContext(UserContext)
  const [updateUser, setUpdateUser] =useState(null)
  const [loading, setLoading] =useState(true)
  useEffect(()=>{
    console.log(user);
    if(user) {
    getUserProfile(user)
    .then(res => {
      setUpdateUser(res)
      setLoading(false)
    })
    }
  },[getUserProfile, user])
  
  return (
    <>

{
      loading ? <h1 className="card-text text-center mt-5 pt-5"></h1> : (
        <div className="container">
          <div className="card border-primary m-auto d-block">
            <div className="card-body form-area">
              <div className="user-profile-info">
                <h1 className="card-title text-center">{updateUser && updateUser.name}</h1>
                <h4 className="card-text text-center">{user.email}</h4>
              </div>
            </div>
          </div>
        </div>
    )  
  }
    </>
  );

};

export default UserProfile;