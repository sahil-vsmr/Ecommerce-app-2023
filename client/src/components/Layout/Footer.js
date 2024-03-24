import React from 'react'
import { Link } from 'react-router-dom'
import Policy from '../../pages/Policy';

const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>All Right Reserved &copy; Sahil.Vsmr</h4>
        <p className='text-center mt-3'>
          <Link to='/about'>
            About
          </Link>
          |
          <Link to='/contact'>
          contact
          </Link>
          |
          <Link to='/policy'>
            Privacy Policy
          </Link>
          |
          
        </p>
    </div>
  )
}

export default Footer