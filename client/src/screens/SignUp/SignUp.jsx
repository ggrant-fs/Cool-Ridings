import React, { useState } from 'react'
import './SignUp.css'
import { signUp, signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
    const history = useHistory()

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: "",
        isError: false,
        errorMsg: ""
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSignUp = event => {
        event.preventDefault()
        const { setUser } = props

        signUp(form)
            .then(() => signIn(form))
            .then(user => setUser(user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                setForm({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
                })
            })
    }

    const renderError = () => {
        const toggleForm = form.isError ? 'danger' : ''
        if (form.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {form.errorMsg}
                </button>
            )
        } else {
            return <button type='submit'>SignUp</button>
        }
    }

    const { email, username, password, passwordConfirmation } = form

    return (
        <div className='form-containter'>
            <h3>Sign Up</h3>
            <form onSubmit={onSignUp}>
                <label>Username</label>
                <input
                    required
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter username"
                    onChange={handleChange}
                />
                <lable>Email address</lable>
                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={handleChange}
                />
                <lable>Password</lable>
                <input
                    required
                    name="password"
                    value={password}
                    type="plassword"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <lable>Password Confirmation</lable>
                <input
                    required
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                />
                {renderError()}
            </form>
        </div>
    )

}
export default SignUp