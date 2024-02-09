import { Banner } from '../../components/Banner/Banner'
import { Item } from '../../components/Item/Item'
import Featuresdata from '../../data/FeaturesData.json'

import iconChat from '../../assets/icon-chat.webp'
import iconMoney from '../../assets/icon-money.webp'
import iconSecurity from '../../assets/icon-security.webp'

function Home() {
  const imageData = {
    'icon-chat.webp': iconChat,
    'icon-money.webp': iconMoney,
    'icon-security.webp': iconSecurity,
  }
  return (
    <div>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {Featuresdata.map((data) => (
            <Item
              key={data.id}
              image={imageData[data.image]}
              altImage={data.altImage}
              title={data.title}
              description={data.description}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home
