import { useState } from 'react'
import './App.css'
import Search from './components/search/Search'
import Menu from './components/menu/Menu'
import Modal from './components/modal/Modal'

function App() {
  const [view, setView] = useState(false) //Estado para el Modal

  function toggleModal() {
    setView(!view) // Funcion para mostrar el Modal
  }

  return (
    <>
      {view &&
        <Modal toggleModal={toggleModal} />
      }
      <div className='container px-4 py-5 mx-auto sm:px-7'>
        <header className='sm:flex sm:justify-between sm:items-center'>
          <img src='/icons/logo.beef9462.svg' alt='logo pagina' />
          {!view &&
            <Search toggleModal={toggleModal} />
          }
        </header>
        <section>
          <div className='flex justify-between items-center mt-16 mb-3 sm:mb-8'>
            <h1 className='text-2xl font-bold'>Stays in Finland</h1>
            <span className='font-medium'>2 stays</span>
          </div>
          <Menu />

        </section>

      </div>

    </>



  )
}

export default App


