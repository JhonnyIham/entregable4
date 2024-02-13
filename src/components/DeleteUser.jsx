import './styles/formUser.css'

const DeleteUser = ({ deleteIsOpen, setDeleteIsOpen, deleteUser}) => {

    const handleCloseDelete = () => {
        setDeleteIsOpen(false)
    }

  return (
    <div className={`form__background ${deleteIsOpen&&'able'}`}>
        <form className="form__container">
            <div className="form__close" onClick={handleCloseDelete}><ion-icon name="close-circle-outline"></ion-icon></div>
            <h2 className="form__title">Eliminar usuario</h2>
            <p className="form__item">El usuario <span className='form__name'>{deleteUser?.first_name} {deleteUser?.last_name}</span> se ha eliminado</p>
            <div className="form__btn2" onClick={handleCloseDelete}>Aceptar</div>
        </form>
    </div>
  )
}
export default DeleteUser