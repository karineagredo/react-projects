import React from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';

const Navbar = (props) => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleMenu = () => setShowLinks(!showLinks);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = linkHeight + 'px';
    } else {
      linksContainerRef.current.style.height = 0 + 'px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt='logo' />
          <button className='nav-toggle' onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map(({ url, text, id }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
