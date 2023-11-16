import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomSidebar from './components/CustomSidebar';



function App() {
  return (       
    <> 
    <Router>      
      <header>
      <Navbar/>
      </header>     
      
      <CustomSidebar/>
      {/*
        <Sidebar/>
        <SidebarData/> 
      */}
    </Router>
    
    </>
  );
}

export default App;
