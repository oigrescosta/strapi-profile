import React from 'react'
import axios from 'axios'
import {handleChange} from '../utils/inputs'
import {API_URL} from '../utils/urls'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bio: "The Bio",
            favouriteGame: "SpellBreak"
        }

        this.handleChange = handleChange.bind(this)
    }

    componentDidMount() {
        console.log("ProfilePage.componentDidMount this.props.user", this.props.user)

        const {bio, favourite_game} = this.props.user.user
        this.setState({bio, favouriteGame: favourite_game})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {bio, favouriteGame} = this.state

        const data = {
            bio,
            favourite_game: favouriteGame
        }

        const userId = this.props.user.user.id
        const jwtToken = this.props.user.jwt

        const updateUserRes = await axios({
            method: 'PUT',
            url: `${API_URL}/users/${userId}`,
            data,
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        })

        console.log("ProfilePage.handleSubmit updateUserRes", updateUserRes)
    }

    render() {
        const {user} = this.props
        console.log("ProfilePage this.props", user)

        const {bio, favouriteGame} = this.state
        return(
            <div className="ProfilePage">
                ProfilePage
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <input type="text" name="bio" id="bio" value={bio} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="favouriteGame">Favourite Game</label>
                        <input type="text" name="favouriteGame" id="favouriteGame" value={favouriteGame} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Update your profile</button>
                </form>
            </div>
        )
    }
}

export default ProfilePage