import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

import { UserContext } from '../context/userContext'

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
  const { currentUser } = useContext(UserContext)

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true)
    }
  }

  return (
    <nav style={styles.nav}>
      <div className="container nav__container" style={styles.container}>
        <Link to="/" className='nav_logo' onClick={closeNavHandler}>
          <div style={styles.nova}>NOVA</div>
          <div style={styles.blogging}>Blogging</div>
        </Link>
        <div className="nav_menu_wrapper">
          <button className="nav_toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
        <div className="nav_menu_wrapper" style={{ marginLeft: 'auto' }}>
          {currentUser?.id && isNavShowing &&
            <ul className="nav_menu">
              <li><Link to={`/profile/${currentUser.id}`} onClick={closeNavHandler}>{currentUser?.name}</Link></li>
              <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
              <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
              <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
            </ul>
          }

          {!currentUser?.id && isNavShowing &&
            <ul className="nav_menu">
              <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
              <li><Link to="/login" onClick={closeNavHandler}>Login</Link></li>
            </ul>
          }
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    borderBottom: '1px solid #ccc',
  },
  container: {
    padding: '10px 20px', // Updated padding
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nova: {
    fontFamily: 'Goblin One, san-serif',
    fontSize: '24px',
    marginLeft: '-80px',
    marginBottom: '-10px', // Adjust spacing between NOVA and Blogging
  },
  blogging: {
    fontFamily: 'Croissant One, san-serif', // Replace Croissant One with your desired font
    fontSize: '20px',
    marginLeft: '-80px',
    marginBottom: '10px'
  },
}

export default Header
