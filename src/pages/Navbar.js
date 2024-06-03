import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleFavoritesClick = () => {
    if (token) {
      navigate('/fav');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-[rgb(205,86,102)] p-5">
      <div className="container mx-auto flex justify-around items-center">
        <a href="#" className="text-white text-4xl font-bold">
          Movie4KHub
        </a>
        <div className="flex space-x-4">
          <ul className="flex space-x-14">
            <li>
              <a
                onClick={handleFavoritesClick}
                className="text-white hover:text-black text-2xl cursor-pointer"
              >
                Favorites
              </a>
            </li>
            <li>
              {!token ? (
                <Link
                  to="/login"
                  className="text-white hover:text-black text-2xl"
                >
                  Login
                </Link>
              ) : (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="text-white hover:text-black text-2xl"
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
