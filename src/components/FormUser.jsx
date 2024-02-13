import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/formUser.css'

const FormUser = ({createUsers, editUser, updateUsers, setEditUser, isOpen, setIsOpen}) => {
    
    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
      reset(editUser)
    }, [editUser])
    

    const submit = (data) => {
      if (editUser) {
        updateUsers('/users', editUser.id, data)
        setEditUser()
      } else {
        createUsers('/users', data)
      }
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
      })
      setIsOpen(false)
    }

    const handleClose = () => {
      setIsOpen(false)
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
      })
    }

  return (
    <div className={`form__background ${isOpen&&'able'}`}>
      <form className="form__container" onSubmit={handleSubmit(submit)}>
        <div className="form__close" onClick={handleClose}><ion-icon name="close-circle-outline"></ion-icon></div>
        <h2 className="form__title">Nuevo usuario</h2>
        <div className="form__item">
          <label htmlFor="first_name">Nombre</label>
          <input {...register('first_name')} id="first_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="last_name">Apellidos</label>
          <input {...register('last_name')} id="last_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="email">Correo</label>
          <input {...register('email')} id="email" type="email" />
        </div>
        <div className="form__item">
          <label htmlFor="password">Contraseña</label>
          <input {...register('password')} id="password" type="password" />
        </div>
        <div className="form__item">
          <label htmlFor="birthday">Cumpleaños</label>
          <input {...register('birthday')} id="birthday" type="date" />
        </div>
        <button className="form__btn">Agregar nuevo usuario</button>
      </form>
    </div>
  )
}
export default FormUser