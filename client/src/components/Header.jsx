import { Link } from 'react-router';
export default function Header() {
    return (
        <header>
            <div className="content-width">
                <p className="site-title">My Film Reviews</p>

                <p>
                    This is where all my film reviews are stored.
                </p>
                <nav aria-label = "Main navigation">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/add">Add</Link>
                </nav>
            </div>
        </header>
    );
}