import {useState, useEffect} from 'react'
import './App.css';
import SignOut from './screens/SignOut/SignOut'
import SignIn from './screens/SingIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import Home from './screens/Home/Home'
import { Route, Switch, Redirect } from 'react-router-dom'
import {verifyUser} from './services/users'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
          <Home user={user}/>
      </Route>
      <Route path="/sign-up">
          <SignUp setUser={setUser}/>
      </Route>
      <Route path="/sign-in">
          <SignIn setUser={setUser}/>
      </Route>
      <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
