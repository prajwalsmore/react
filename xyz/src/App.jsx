import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const products = [
      {id: 1, title : "KeyBoard", price : 49},
      {id: 2, title : "Mouse", price : 39},
      {id: 3, title : "Monitor", price : 59}
    ]
  }

  return (
    <>
      <ul>
        {
          products.map(product => (
            <li
            key = {product.id}
            >
              {product.title} - {product.price}
            </li>
          )

          )
        }
      </ul>
    </>
  )
}

export default App
