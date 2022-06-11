import './Header.css';
import {
    Link
  } from "react-router-dom";
export function Header(){
    return(
        <div className="header-blue">
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div className="container-fluid"><Link className="navbar-brand" to="/">DEVICE MANAGEMENT</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><Link className="nav-link" to="/">Main</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-expanded="false" to="/devices">Devices</Link>
                            </li>
                        </ul>
                        </div>
                </div>
            </nav>
        </div>
    );
}