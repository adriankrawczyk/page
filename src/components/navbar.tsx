import { RiComputerLine } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav id='header' className='bg-gray-900 fixed w-full z-10 top-0 shadow'>
      <div className='w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0'>
        <div className='w-1/2 pl-2 md:pl-0'>
          <a className='text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold' href='#'>
            <i className='fas fa-moon text-blue-400 pr-3'></i> Adrian Krawczyk
          </a>
        </div>

        <div className='w-1/2 pr-0'>
          <div className='flex relative inline-block float-right'>
            <div className='relative text-sm text-gray-100'>
              <div id='userMenu' className='bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible'>
                <ul className='list-reset'>
                  <li>
                    <a href='#' className='px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline'>
                      My account
                    </a>y
                  <li>
                    <a href='#' className='px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline'>
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href='#' className='px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline'>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='block lg:hidden pr-4'>
              <button id='nav-toggle' className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100  hover:border-teal-500 appearance-none focus:outline-none'>
                <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-900 z-20' id='nav-content'>
          <ul className='list-reset lg:flex flex-1 items-center px-4 md:px-0'>
            <li className='mr-6 my-2 md:my-0'>
              <a href='#' className='block py-1 md:py-3 pr-2 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2  border-blue-400 hover:border-blue-400'>
                <i className='fas fa-home fa-fw mr-3 text-blue-400'></i>
                <span className='pb-1 md:pb-0 text-sm'>Home</span>
              </a>
            </li>
            <li className='mr-6 my-2 md:my-0'>
              <a href='#' className='block py-1 md:py-3 pr-2 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900 transition ease-in-out  duration-500 hover:border-pink-400 '>
                <i className='fas fa-tasks fa-fw mr-3'></i>
                <span className='pb-1 md:pb-0 text-sm'>Javascript</span>
              </a>
            </li>
            <li className='mr-6 my-2 md:my-0'>
              <a href='#' className='block py-1 md:py-3 pr-2 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  transition ease-in-out  duration-500 hover:border-purple-400'>
                <i className='fa fa-envelope fa-fw mr-3'></i>
                <span className='pb-1 md:pb-0 text-sm'>Python</span>
              </a>
            </li>
            <li className='mr-6 my-2 md:my-0'>
              <a href='#' className='block py-1 md:py-3 pr-2 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  transition ease-in-out  duration-500 hover:border-green-400'>
                <i className='fas fa-chart-area fa-fw mr-3'></i>
                <span className='pb-1 md:pb-0 text-sm'>Unity</span>
              </a>
            </li>
            <li className='mr-6 my-2 md:my-0'>
              <a href='#' className='block py-1 md:py-3 pr-2 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-red-400'>
                <i className='fa fa-wallet fa-fw mr-3'></i>
                <span className='pb-1 md:pb-0 text-sm'>Other</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const NavbarButton = ({ icon }: any) => <div className='navbar-button'>{icon}</div>;
export default Navbar;
