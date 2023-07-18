import './App.css';
import {useContext} from 'react';
import ButtonAppBar from './components/navigation'
import AddPlayers from './components/addNewPlayers'
import Players from './components/gensokyoPlayers'
import Details from './components/Detail'
import Contacts from './components/Contacts'
import Factions from './components/factionDetails'
import AboutUs from './components/About'
import UpdatePlayers from './components/updatePlayers'
import SignInGoogle from './components/signInGoogle'
import {ThemeContext} from './components/changeTheme';
import {BrowserRouter as Router, Switch, Route,Routes} from "react-router-dom";



function App() {
  const { theme } = useContext(ThemeContext);

  return (

    <div className="App">
    <div className='background' style={{backgroundImage: theme.backgroundImage,transition: 'all 1s ease-in-out'}}>
    <ButtonAppBar/>
    <Routes>
      <Route path='/' element={<Players/>}></Route>
      <Route path='/signInGoogle' element={<SignInGoogle/>}></Route>
      <Route path='/Contacts' element={<Contacts/>}></Route>
      <Route path='/About' element={<AboutUs/>}></Route>
      <Route path='/updatePlayers/:id' element={<UpdatePlayers/>}></Route>
      <Route path='/Detail/:id' element={<Details/>}></Route>
      <Route path='/factionDetails/:faction' element={<Factions/>}></Route>
      <Route path='/addNewPlayers' element={<AddPlayers/>}></Route>

    </Routes>
    </div>
    </div>
  );
}

export default App;
