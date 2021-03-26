import React from 'react'
import {handleChange} from '../utils/inputs'

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

    render() {
        const {user} = this.props
        console.log("ProfilePage this.props", user)

        const {bio, favouriteGame} = this.state
        return(
            <div className="ProfilePage">
                ProfilePage
                <div>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" name="bio" id="bio" value={bio} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="favouriteGame">Favourite Game</label>
                    <input type="text" name="favouriteGame" id="favouriteGame" value={favouriteGame} onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default ProfilePage