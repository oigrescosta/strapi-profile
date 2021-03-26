import React from 'react'
import RegisterOrLogin from './components/RegisterOrLogin'
import ProfilePage from './components/ProfilePage'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  state = {
    user: null
  }
  render() {
    const {user} = this.state
    return(
      <div className="App">
        {!user &&
          <RegisterOrLogin updatedUser={(user) => this.setState({user})} />
        }
        {user &&
          <ProfilePage user={user} />
        }
     </div>
    )
  }
}

export default App
