import {useState} from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";
import Sidebar from './MethodSidebar';
import glob from './Images/glob.jpg'


export default function CustomSidebar(props, {defaultActive}) {

  const [activeIndex, ] = useState(defaultActive || 1);

  const [isNotActive, setNotActive] = useState("true");
  //const [isDropdownActive, setDropdownActive] = useState("false");
  var barsIcon =  <i className="fas fa-angle-double-left"></i>
  var plusIcon =  <i className="fa fa-plus"></i>

  return (
    <>
    <div className='wrapper'>
      <nav id='sidebar' className={isNotActive ? "active" : ""}>
        <button  type="button" id="sidebarCollapse" onClick={() => setNotActive(!isNotActive)}
            className="btn btn-custom">
            <span className={ isNotActive ? '' : 'hidden' } >{ plusIcon }</span>
            <span className={ isNotActive ? 'hidden' : '' }>{ barsIcon }</span>
            </button>{Sidebar}
            <div className='sidebar-header'>
            <img src={glob} className="rounded-circle usr-image" alt='Sidebar'
              height={isNotActive ? "20" : "70"}
              width={isNotActive ? "20" : "70"}></img>
               <h5>Method-One</h5>
            </div>            
            <ul className="list-unstyled components">
            <li className="list-item" id='01'>
              <span style={{color:'green'}}>01</span>
              <Link to='/'>What is it</Link>
            </li>
            <li className="list-item" id='02'>
            <span style={{color:'green'}}>02</span>
              <Link to="/">Why do you need it?</Link>
            </li>
            <li className="list-item" id='03'>
            <span style={{color:'green'}}>03</span>
              <Link to="/">Inputs</Link>
            </li>
            <li className="list-item" id='04'>
            <span style={{color:'green'}}>04</span>
              <Link to="/">Deliverable(s)</Link>
            </li>
            <li className="list-item" id='05'>
            <span style={{color:'green'}}>05</span>
              <Link to="/">Key considerations</Link>
            </li>
            <li className="list-item" id='06'>
            <span style={{color:'green'}}>06</span>
              <Link to="/">Best practices</Link>
            </li>
            <li className="list-item" id='07'>
            <span style={{color:'green'}}>07</span>
              <Link to="/">Risks & mitigations</Link>
            </li>
            <li className="list-item" id='08'>
            <span style={{color:'green'}}>08</span>
              <Link to="/">Assets & tools</Link>
            </li>
            <li className="list-item" id='09'>
            <span style={{color:'green'}}>09</span>
              <Link to="/">Learn more</Link>
            </li>
            </ul>
            </nav>

        </div>
        
    </>
  )
}
