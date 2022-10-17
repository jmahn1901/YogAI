let Header = () => {
    return <>
        <nav className="site-nav dark js-site-navbar mb-5 site-navbar-target">
            <div className="container">
                <div className="site-navigation">
                    <a href="index.html" className="logo m-0 float-left">Landing<span className="text-primary">.</span></a>

                    <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-left">
                        <li className="active"><a href="#home-section" className="nav-link active">Home</a></li>
                        <li className="has-children">
                            <a href="#" className="nav-link">Dropdown</a>
                            <ul className="dropdown">
                                <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                                <li><a href="elements.html" className="nav-link">Elements</a></li>
                                <li className="has-children">
                                    <a href="#">Menu Two</a>
                                    <ul className="dropdown">
                                        <li><a href="#" className="nav-link">Sub Menu One</a></li>
                                        <li><a href="#" className="nav-link">Sub Menu Two</a></li>
                                        <li><a href="#" className="nav-link">Sub Menu Three</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="nav-link">Menu Three</a></li>
                            </ul>
                        </li>
                        <li><a href="#features-section" className="nav-link">Features</a></li>
                        <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                        <li><a href="#about-section" className="nav-link">About</a></li>
                        <li><a href="#contact-section" className="nav-link">Contact</a></li>
                    </ul>

                    <ul className="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
                        <li className="cta-button-outline"><a href="signin.html">Sign in</a></li>
                        <li className="cta-primary"><a href="register.html">Register</a></li>
                    </ul>



                    <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>

                </div>
            </div>
        </nav>
    </>
}

export default Header