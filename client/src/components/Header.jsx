export default function Header() {
    return (
        <header>
            <div className="content-width">
                <p className="site-title">My Film Reviews</p>

                <p>
                    This is where all my film reviews are stored.
                </p>
                <nav aria-label = "Main navigation">
                    <a href="/">Home</a>
                    <a href="/about.html">About</a>
                    <a href="/add.html">Add</a>
                </nav>
            </div>
        </header>
    );
}