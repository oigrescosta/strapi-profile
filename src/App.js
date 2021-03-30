import React from 'react'
import RegisterOrLogin from './components/RegisterOrLogin'
import ProfilePage from './components/ProfilePage'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    if(localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      this.setState({user})
    }
  }

  logout = () => {
    localStorage.removeItem('user')
    this.setState({user:null})
  }

  render() {
    const {user} = this.state
    return(
      <div className="App">
        {!user &&
          <RegisterOrLogin updatedUser={(user) => this.setState({user})} />
        }
        {user &&
          <div>
            <ProfilePage user={user} />
            <button onClick={this.logout}>Log out</button>
          </div>
        }
     </div>
    )
  }
}

export default App
