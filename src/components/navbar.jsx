export const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-gradient-to-b from-black to-purple-900 px-6 md:px-10">
        <div className="navbar-start text-white">
          <a className="btn btn-ghost text-xl">
            <img src="/images/icon.png" className="inline-block mr-2" />
            NFTopia
          </a>
        </div>
        <div className="navbar-center text-white lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Discover</a>
              </li>
              <li>
                <a>Market</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center text-white hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Discover</a>
            </li>
            <li>
              <a>Market</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          <a className="btn rounded-full">Login</a>
          <a className="btn rounded-full">Registration</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
