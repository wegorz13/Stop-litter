function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <div
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
      <div className="logo ml-auto">stop-litter</div> */}

      <div className="container-fluid custom-light-blue mx-2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse fs-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a
                className="nav-link active text-secondary text-dark link"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link active text-secondary text-dark link"
                aria-current="page"
                href="/form"
              >
                Contribute
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link active text-secondary text-dark link"
                href="/charts"
              >
                Charts
              </a>
            </li>
          </ul>
        </div>
        <p className="navbar-brand logo ml-auto">stop-litter</p>
      </div>
    </nav>
  );
}

export default Navbar;
