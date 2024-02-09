import { User } from '../../components/User/User'
import { Account } from '../../components/Account/Account'
import AccountData from '../../data/AccountData.json'

function Profile() {
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
