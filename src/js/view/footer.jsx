export default function Footer (){
  return (
    <>
      <footer className="section footer">
        <div className="footer-center container-lg">
          {/* <!-- footer links --> */}
          <ul className="footer-links">
            <li>
              <a className="footer-link" href="#home">
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#package">
                {" "}
                packages{" "}
              </a>
            </li>

            <li>
              <a className="footer-link" href="#">
                {" "}
                book{" "}
              </a>
            </li>
          </ul>
          {/* <!-- end footer links --> */}
          {/* <!-- icons --> */}
          <ul className="footer-icons">
            <li>
              <a className="footer-icon" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a className="footer-icon" href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>

            <li>
              <a className="footer-icon" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a className="footer-icon" href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
          {/* <!-- end of icons --> */}
          <div className="footer-info">
            <h2 className="display-6 footer-text">
              copy &copy;2024 All Right Reserved,
            </h2>
            <h2 className="display-5 footer-text">Travel Tour Company</h2>
          </div>
        </div>
      </footer>
    </>
  );
}