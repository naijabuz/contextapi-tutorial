import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center bg-[#202020] text-[#f0f0f0] p-10">
      <h1 className="text-[30px] font-bold">Context API Tutorial</h1>

      <nav>
        <ul className="flex justify-evenly gap-20 text-red-500">
          <li className="hover:text-[#f0f0f0]">
            <Link to="/">Home Page</Link>
          </li>

          <li className="hover:text-[#f0f0f0]">
            <Link to="/cart">Cart Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
