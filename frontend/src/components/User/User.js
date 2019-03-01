import React from 'react';
import '../css/User.css';
import { Link, Route } from 'react-router-dom'
import UserPins from './UserPins.js'
import Boards from './Boards.js'

let plus = require('../assets/plus.png');
let pencil = require('../assets/pencil.png')
let share = require('../assets/share.png')

export const User = ({ username, userPins }) => {
  return(
  <>
    <UserProfile />

    <div className="boardsNpins">
      <div className="boards">
        <Link to={`/username/${username.id}/boards/`}>Boards</Link>
      </div>

      <div className="pins">
        <Link to={`/username/${username.id}/pins/`}>Pins</Link>
        <div className="allUserPins">
          {username.pin_url}
        </div>
      </div>

  </div>
  <Route path='/username/:id/pins' component={UserPins}/>
  <Route path='/username/:id/boards' component={Boards}/>

  </>
  )
}


export default User
