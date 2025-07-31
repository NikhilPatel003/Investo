export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom">
      <div class="container">
        <a class="navbar-brand col-5" href="#">
          <img
            src="/media/Images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-7 ms-5" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item me-4">
                <a class="nav-link" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
