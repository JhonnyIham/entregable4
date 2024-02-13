import './styles/cardUser.css'

const CardUser = ({user, deleteUsers, setEditUser, setIsOpen}) => {

    const handleDelete = () => {
        deleteUsers('/users', user.id)
    }

    const handleEdit = () => {
        setEditUser(user)
        setIsOpen(true)
    }

  return (
    <article className='user'>
        <h3 className='user__name'>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='user__list'>
            <li className='user_item'><span>CORREO </span><span>{user.email}</span></li>
            <li className='user_item'><span>CUMPLEAÑOS </span><span><ion-icon name="gift-outline"></ion-icon>{user.birthday}</span></li>
        </ul>
        <div className='user__btns'>
            <button className='user__btndelete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
            <button className='user__btnEdit' onClick={handleEdit}><box-icon name='edit-alt'></box-icon></button>
        </div>
    </article>
  )
}
export default CardUser