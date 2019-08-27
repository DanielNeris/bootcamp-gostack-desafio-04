import React from 'react';

import './styles.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <h1><a href="/" className="logo">Facebook</a></h1>

                <div>
                    <ul>
                        <li>Meu Perfil</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;