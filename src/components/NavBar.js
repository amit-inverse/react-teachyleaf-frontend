import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">
                TeachyLeaf
            </Link>
            <div>
                <Link className={styles.navLink} to="/about">
                    About
                </Link>
                <Link className={styles.navLink} to="/services">
                    Services
                </Link>
                <Link className={styles.navLink} to="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
