import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Demo page</h1>
      <div className="card">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto voluptas fugiat vitae suscipit, eligendi eos culpa 
          magni dolores quia obcaecati assumenda rem, alias totam enim temporibus dolorem! At nostrum cupiditate cum accusamus est doloribus eaque 
          rerum, nemo sit quod tempore aspernatur quisquam ipsum, aperiam reiciendis esse et natus obcaecati suscipit? Dolore, soluta. Impedit optio 
          dignissimos eos soluta mollitia in doloremque obcaecati corporis, nesciunt sunt repudiandae cumque, laboriosam ea tempore eum quidem
          distinctio ipsa tenetur blanditiis neque labore. Labore dolore quibusdam corporis numquam voluptates quas cupiditate expedita?
          Alias quia quaerat deleniti officiis enim repellat voluptate aperiam illo maiores eaque nostrum iure, quae, qui deserunt molestias 
          eveniet assumenda officia maxime. Sint, illum? Odio aut rerum eius, esse, ad, quidem possimus alias in quae ipsam autem dolorem 
          magni exercitationem qui eos cumque quis numquam aliquid ad obcaecati fugiat, doloremque veritatis provident aliquam.
        </p><br /><br />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <P>Hello</P>
        <p>Ram ram ladder</p>
      </div>
    </>
  )
}

export default App
