import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


 
const Navbar1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
   

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          My Contacts
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
           
              <>
                 
                <li className="nav-item">
                  <Link className="nav-link" to={'/register'}>
                      Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                      Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/profile'}>
                     Profile
                  </Link>
                </li>
              </>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;