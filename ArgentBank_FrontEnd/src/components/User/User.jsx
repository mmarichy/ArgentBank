import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsername } from '../../redux/actions/user.actions'

export function User() {
  // const token = useSelector((state) => state.auth.token)
  const userData = useSelector((state) => state.user.userData)
  // console.log(userData)
  // const [editSection, setEditSection] = useState(true)
  // const [userName, setUserName] = useState('')

  // const [errorMessage, setErrorMessage] = useState('')

  // const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event.target.username)

    // try {
    //   const response = await fetch(
    //     'http://localhost:3001/api/v1/user/profile',
    //     {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/JSON',
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify({ userName }),
    //     }
    //   )
    //   if (response.ok) {
    //     const data = await response.json()
    //     const username = data.body.username
    //     dispatch(updateUsername(username))
    //     setEditSection(!editSection)
    //   } else {
    //     console.log('Invalid')
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
  }
  return (
    <div className="header">
      <h2>
        Welcome back
        <br />
        {userData.firstname} {userData.lastname} !
      </h2>
      <button className="edit-button">Edit Name</button>

      <h2> Edit user info</h2>
      <form>
        <div className="edit-input">
          <label htmlFor="username">User name: </label>
          <input type="text" id="username" defaultValue={userData.username} />
        </div>
        <div className="edit-input">
          <label htmlFor="firstname">First name: </label>
          <input
            type="text"
            id="firstname"
            defaultValue={userData.firstname}
            disabled={true}
          />
        </div>
        <div className="edit-input">
          <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            id="lastname"
            defaultValue={userData.lastname}
            disabled={true}
          />
        </div>
        <div className="buttons">
          <button className="buttons_edit" onClick={handleSubmit}>
            Save
          </button>
          <button className="buttons_edit" onClick={handleSubmit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
