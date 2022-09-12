const Leftbar = () => {
  return (
    <>
      <aside className='w-64  border-r-4 border-neutral-500' aria-label='Sidebar'>
        <div className='py-4 px-3 bg-gray-50  dark:bg-gray-800'>
          <ul className='space-y-8'>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  JavaScript
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  Python
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  C#
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  Unity
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  JavaScript canvas
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  Pyautogui
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  C++
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  Java
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type='button'
                onClick={() => dropDown('dropdown-example')}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <span className='flex-1 ml-3 text-left whitespace-nowrap' sidebar-toggle-item=''>
                  Java
                </span>
                <svg sidebar-toggle-item='' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a href='#' className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
  function dropDown(id: string) {
    const element = document.getElementById(id);
    if (element && element.classList.contains('hidden')) element.classList.remove('hidden');
    else if (element) element.classList.add('hidden');
  }
};
export default Leftbar;
