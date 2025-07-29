import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="flex  items-center justify-between shadow-md">
      <div className=" flex align-center justify-between p-4">
        <img src={logo} alt="logo"  />
      </div>
      <nav className="">
        <ul className="flex items-center justify-between  md:flex-row flex-col gap-4 border-b ">
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">supported Bussineses</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
        </ul>
        <ul className="flex items-center justify-between md:flex-row flex-col gap-4 ">
          <li>
            <a href="#">login</a>
          </li>
          <li className="btn btn-secondary text-white rounded">
            <a href="#">join wait list</a>
          </li>
          <li className="btn btn-ghost text-white  rounded">
            <a href="#">download</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
