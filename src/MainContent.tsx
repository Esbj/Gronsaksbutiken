import { mockedProducts } from './data'
const MainContent = () => {
  return (
    <main>
      {mockedProducts.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price} kr</p>
          <button>Lägg i kundvagn</button>
        </div>
      ))}
    </main>
  )
}

export default MainContent
