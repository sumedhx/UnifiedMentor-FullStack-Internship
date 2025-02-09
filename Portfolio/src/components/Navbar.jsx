import react from "react";

function Navbar(){
    return(
    <div className="navbar">
        <a href=""><h1>Portfolio</h1></a>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="project">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <button className="navBtn">Let's Talk</button>
    </div>
    )
}

export default Navbar