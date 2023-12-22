import logo from './logo.svg';
import './App.css';
import { Greetings,Hello } from './components/Simple';
import { Profile, ProfileTable } from './components/Profile';
import { Comment } from './components/Comment';
import { profiles } from './util/fake';
import { MyForm } from './components/Users';
import {Link ,Route,Routes, route } from 'react-router-dom';
import { Registration } from './components/Registration';
import { Login } from './components/Login';

function App() {
  // let title = 'React App'
  // let data = {username : 'Aneesh',email :'aneesh@gmail.com',imageUrl : 'https://media.licdn.com/dms/image/D5603AQG_8bJ0sNYoGA/profile-displayphoto-shrink_800_800/0/1700838563890?e=1708560000&v=beta&t=5SztJ97bqxYcaU22Ql2Ov7d3EyTHtMDseaXP-TTROZE',address : {state:'Telangana',city : 'Hyd'},occupation :'Associate Software Developer'};

  // let comment = {
  //   user : {name : "Aneesh Bhavirisetty", imageUrl : "https://media.licdn.com/dms/image/D5603AQG_8bJ0sNYoGA/profile-displayphoto-shrink_800_800/0/1700838563890?e=1708560000&v=beta&t=5SztJ97bqxYcaU22Ql2Ov7d3EyTHtMDseaXP-TTROZE"},
  //   text : {value : "Looking Great",likes : '32.3k',dislikes : 200},
  //   date : '2023-20-12'
  // };

  // let items = ['Laptop','Mobile','Tv','Fridge']
  return(
    
    <div className='container-fluid'>
      <h2 className='alert alert-primary text-center'>Profile Management App</h2>
      {/* <div className='row'>
        <div className='col-6'> 
            <Link to = '/register'>Register</Link> | 
            <Link to = '/Login'>Login</Link> | 
            <Link to = '/ListProfiles'>List Profiles</Link>
        </div>
      </div> */}

      <div className='row'>
        <div className='col'>
          <Routes>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/register' element = {<Registration/>}/>
            {/* <Route path = '/login' element = {<div>Login Under Contruction</div>}/> */}
            {/* <Route path = '/ListProfiles' element = {<UserProfileList/>}/>
            <Route path = '/success/:id/*' element = {<UserProfileSuccess/>}/> */}


          </Routes>
        </div>
      </div>
    {/* <UserProfileList/>  
    <UserProfileRegister/>   */}
    </div>
  );
}

export default App;
