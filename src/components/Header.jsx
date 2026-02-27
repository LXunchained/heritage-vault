import { Scroll, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import VaultSwitcher from './VaultSwitcher';

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <Scroll className="text-amber-500 w-5 h-5" />
                    </div>
                    <span className="navbar-logo-text">
                        Héritage & Sagesse
                    </span>
                </Link>

                {/* Nav links — hidden on mobile */}
                <nav className="navbar-nav hide-mobile">
                    <Link to="/" className="nav-link">Livres</Link>
                    <Link to="/" className="nav-link">Philosophie</Link>
                    <Link to="/" className="nav-link">Communauté</Link>
                </nav>

                {/* Actions */}
                <div className="navbar-actions">
                    <VaultSwitcher />
                    <button className="btn btn-primary text-sm px-5 py-2.5 rounded-xl">
                        Commencer
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
