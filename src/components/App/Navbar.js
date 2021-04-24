import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.webp"

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
			<div class="topbar">
				<p>Hi, I'm a fixed topbar that disappears and reappears depeing on scroll positions</p>
			</div>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link 
                                            to="/"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/about-us" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            About Us <i className='bx bx-chevron-down'></i>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/about-us" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   About Us
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/history" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    History
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/testimonials" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Media Coverage
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/team" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Team @Webure
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/services"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Services
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/career" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Career
                                        </Link>
                                    </li>
									
                                    <li className="nav-item">
                                        <Link 
                                            to="/case-studies" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            ROI Stories</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/blog" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link 
                                            to="/gallery" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Clientele
                                        </Link>
                                    </li>
                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <Link 
                                            to="/contact" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="default-btn"
                                        >
                                            <i className="flaticon-right"></i> Connect with Us <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
