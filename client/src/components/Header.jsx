import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white">
      <Link to="/" className="self-center ">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Abdulrahman's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
        <Button className="lg:hidden w-12 h-10" color="gray" pill>
          <AiOutlineSearch />
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" pill color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone={'purpleToBlue'} outline>
            Signin
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Notes : when we write sm: we mean that do this style to all large than small screen
// Notes : when we write lg: we mean that do this for only large screen because we don't have screen big than large

export default Header;
