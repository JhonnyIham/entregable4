import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'
import DeleteUser from './components/DeleteUser'

function App() {

  const [editUser, setEditUser] = useState()  
  const url = 'https://users-crud.academlo.tech/'
  const [ users, getUsers, createUsers, deleteUsers, updateUsers ] = useCrud(url)
  const [deleteUser, setDeleteUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)

  useEffect(() => {
    getUsers('users/')
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }
  
  return (
    
    <div className='app'>
      <div className='app__header'>
        <h1>Usuarios</h1>
        <button onClick={handleOpen}>+ crear nuevo usuario</button>
      </div>
      <FormUser 
        createUsers = {createUsers}
        editUser = {editUser}
        updateUsers = {updateUsers}
        setEditUser = {setEditUser}
        isOpen = {isOpen}
        setIsOpen = {setIsOpen}
      />
      <DeleteUser 
        deleteIsOpen = {deleteIsOpen}
        setDeleteIsOpen = {setDeleteIsOpen}
        deleteUser = {deleteUser}
      />
      <div className='app__conteiner'>
        {
          users?.map(user => (
            <CardUser 
              key = {user.id}
              user = {user}
              deleteUsers = {deleteUsers}
              setEditUser = {setEditUser}
              setIsOpen = {setIsOpen}
              setDeleteIsOpen = {setDeleteIsOpen}
              setDeleteUser = {setDeleteUser}
            />
          ))
        }
      </div>
    </div>

  )
}

export default App
