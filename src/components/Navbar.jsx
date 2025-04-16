// importazione file
import {NavLink} from "react-router-dom"


export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" >Home page</NavLink></li>
                <li><NavLink to="/chi-siamo" >Chi siamo</NavLink></li>
                <li><NavLink to="/posts" >Lista posts</NavLink></li>
            </ul>
        </nav>
    )
}