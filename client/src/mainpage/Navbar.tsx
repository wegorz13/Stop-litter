function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div
        className="collapse navbar-collapse fs-4"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active link">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item link">
            <a className="nav-link" href="/form">
              Contribute
            </a>
          </li>
          <li className="nav-item link">
            <a className="nav-link" href="/charts">
              Charts
            </a>
          </li>
        </ul>
      </div>
      <div className="logo ml-auto">stop-litter</div>
    </nav>
  );
}

export default Navbar;
