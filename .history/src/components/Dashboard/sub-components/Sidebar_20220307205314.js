

const SideBar = () => {
    return (
      <nav className="h-full bg-white shadow-xs basis-1/12 flex-col items-center justify-start space-y-10 pt-10 hidden md:flex">
        {dashboardNavigation.map((navItem, index) => (
          <NavLink key={index} to={navItem.path} className="group">
            {({ isActive }) => (
              <>
                <navItem.Icon
                  className={
                    isActive
                      ? "hidden"
                      : "text-4xl text-gray-600 group-hover:hidden"
                  }
                />
  
                <navItem.IconFilled
                  className={
                    isActive
                      ? "text-4xl text-lime-700"
                      : "hidden text-4xl text-lime-700 group-hover:block"
                  }
                />
              </>
            )}
          </NavLink>
        ))}
        <div className="w-full flex justify-center items-center bg-red-700 hover:bg-red-900 py-2 justify-self-end">
          <RiShutDownLine className="text-3xl text-white" />
        </div>
      </nav>
    );
  };
  