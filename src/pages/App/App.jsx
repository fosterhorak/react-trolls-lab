import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NewTrollPage from '../NewTrollPage/NewTrollPage';
import TrollIndexPage from '../TrollIndexPage/TrollIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import * as trollAPI from '../../utilities/trolls-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [trolls, setTrolls] = useState([
    {name: 'Albert', breed: 'Green Snoot', age:12, temperament:'hangry'},
    {name: 'Alphonso', breed: 'Red Dinkle', age:6, temperament:'jolly'},
    {name: 'Grouchy', breed: 'Gray Goostle', age:19, temperament:'crotchety'},
    {name: 'Sunshine', breed: 'Golden Squeesh', age:10, temperament:'annoyingly happy'},
    {name: 'Zachariah', breed: 'Blue Dart', age:13, temperament:'very chill'},
  ]);

  //get trolls for index view
  useEffect(() => {
    async function getTrolls(){
      const trolls = await trollAPI.getAll();
      setTrolls(trolls);
    }
    getTrolls();
  }, [])


  return (
    <main className="App">
      { user ? 
          <>
            <NavBar user={user} setUser={setUser}/>
            <Switch>
              {/*<Route path="/orders/new">
                <NewOrderPage /> 
              </Route>
              <Route path="/orders">
                <OrderHistoryPage /> 
              </Route> */}
              <Route path="/trolls/new">
                <NewTrollPage trolls={trolls} setTrolls={setTrolls} /> 
              </Route>
              <Route path="/trolls">
                <TrollIndexPage trolls={trolls} setTrolls={setTrolls} /> 
              </Route>
              <Redirect to="/trolls" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


