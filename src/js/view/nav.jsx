
export default function Header(){
  return (
  
    <header className="header" id="home">
      <nav className="nav-fixed" id="navBtn">
        <div className="section-center nav-center">
          <div className="logo">
            <div className="logo-container">
              <h2 className="logo-text">Travel</h2>
              <h3 className="logo-text1">Concierge</h3>
            </div>
          </div>
          <button className="nav-btn" id="nav-btn">
            <i className="bi bi-list"></i>
          </button>
          <ul className="global-icons global-header">
            <li><a href="#home" className="social-icon headerText">Home</a></li>
            <li>
              <a href="#package" className="social-icon headerText">Packages</a>
            </li>
            <li>
              <a href="#" className="bookLink social-icon headerText"
                >Book</a
              >
            </li>
          </ul>
          {/* <!-- icons --> */}
          <ul className="global-icons">
            <li>
              <a className="nav-link social-icon header-icon" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a className="nav-link social-icon header-icon" href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>

            <li>
              <a className="nav-link social-icon header-icon" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a className="nav-link social-icon header-icon" href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
          {/* <!-- end of icons --> */}
        </div>
      </nav>
      <aside className="sidebar d-md-none" id="sidebar">
        <div>
          <ul className="sidebar-links me-5">
            <li>
              <a href="#home" className="sidebar-link">home</a>
            </li>
            <li>
              <a href="#package" className="sidebar-link">packages</a>
            </li>
            <li>
              <a href="#" className="sidebar-link bookLink">Book</a>
            </li>
          </ul>
          {/* <!-- icons --> */}
          <ul className="side-icons">
            <li>
              <a className="nav-link social-icon side-link" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a className="nav-link social-icon side-link" href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>

            <li>
              <a className="nav-link social-icon side-link" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a className="nav-link social-icon side-link" href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </header>
     
  )
}