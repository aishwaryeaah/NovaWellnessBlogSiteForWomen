import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li><Link to="/posts/categories/A">A - Sexual Health</Link></li>
        <li><Link to="/posts/categories/B">B - Emotional Intelligence & Resilience</Link></li>
        <li><Link to="/posts/categories/C">C - Menstrual Health</Link></li>
        <li><Link to="/posts/categories/D">D - Cancer</Link></li>
        <li><Link to="/posts/categories/E">E - Wellness & Optimal Living</Link></li>
        <li><Link to="/posts/categories/F">F - Mental Health</Link></li>
        <li><Link to="/posts/categories/G">Uncategorised</Link></li>
      </ul>

      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, NovaCreaters </small>
      </div>

    </footer>
  )
}

export default Footer;
