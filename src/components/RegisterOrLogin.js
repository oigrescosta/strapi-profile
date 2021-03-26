import React from 'react'
import axios from 'axios'
import {handleChange} from '../utils/inputs'

class RegisterOrLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            mode: 'login'
        }

        this.handleChange = handleChange.bind(this)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log("RegisterOrLogin.handleSubmit")
        //Sign the user up with Strapi
        const {email, password, mode} = this.state

        const data = {
            email, 
            password,
            username: email,
            identifier: email
        }

        let url = ''
        if(mode === 'login') {
            url = 'http://localhost:1337/auth/local'
        }

        if(mode === 'signup') {
            url = 'http://localhost:1337/auth/local/register'
        }

        const userCreationRes = await axios({
            method: 'POST',
            url,
            data
        })

        console.log("RegisterOrLogin.handleSubmit userCreationRes", userCreationRes)
        if(this.props.updatedUser && typeof this.props.updatedUser === 'function') {
            this.props.updatedUser(userCreationRes.data)
        }
    }

    render() {
        const {email, password, mode} = this.state
        return(
            <div className="RegisterOrLogin">
                <h1>{mode}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} name="email" id="email" value={email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={this.handleChange} name="password" id="password" value={password} />
                    </div>
                    <button type="submit">{mode}</button>
                </form>
                {mode === 'login' && 
                <p onClick={() =>  this.setState({mode:'signup'})}>Want to Signup instead?</p>}
                {mode === 'signup' && 
                <p onClick={() =>  this.setState({mode:'login'})}>Want to Login instead?</p>}
            </div>
        )
    }
}

export default RegisterOrLogin