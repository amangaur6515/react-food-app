import './App.css';
import { Navbar } from './components/Navbar';
import {Body} from './components/Body'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './utils/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar/>
        {/* outlet */}
        <Outlet/> 
        {/* //matched url pattern components will be inseerted here */}
        <Footer/>
      </Provider>
      
    </>
  );
}



export default App;
