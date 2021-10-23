function Header() {
    return (
      <header className="body-font sm:px-20 fixed z-10 w-full bg-light">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-tertiary"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart"
              className="text-tertiary"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
  
            <span className="ml-3 text-xl hidden md:block font-semibold">
              Heart-To-Heart
            </span>
          </a>
          <nav className="ml-auto mr-auto flex flex-wrap items-center text-base justify-center"></nav>
          <button className="inline-flex items-center mr-4 md:mr-5 text-md font-semibold cursor-pointer text-tertiary">
            For Therapists
          </button>
          <a
            className="inline-flex items-center text-white bg-tertiary border-0 py-2 px-4 focus:outline-none hover:opacity-80 rounded-full font-semibold"
            href="/signin"
          >
            Sign in
          </a>
        </div>
      </header>
    );
  }
  
  export default Header;
  