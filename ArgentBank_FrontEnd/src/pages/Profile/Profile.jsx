import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { User } from '../../components/User/User'
import { Account } from '../../components/Account/Account'
import AccountData from '../../data/AccountData.json'
import { userProfile } from '../../redux/actions/user.actions'

function Profile() {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          if (response.ok) {
            const data = await response.json()
            const userData = {
              firstname: data.body.firstName,
              lastname: data.body.lastName,
              username: data.body.userName,
            }
            dispatch(userProfile(userData))
          } else {
            console.log('error while retrieving profile')
          }
        } catch (error) {
          console.error(error)
        }
      }
      userData()
    }
  }, [dispatch, token])
  return (
    <div>
      <main className="bg-dark">
        <User />
        {AccountData.map((data) => (
          <Account
            key={data.id}
            title={data.title}
            amount={data.amount}
            description={data.desription}
          />
        ))}
      </main>
    </div>
  )
}

export default Profile
