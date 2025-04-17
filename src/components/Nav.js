import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <>
            <nav>
                <>
                    <div className='nav-content'>
                        <div className='nav-content-1'>
                            <h1>LOGO</h1>
                        </div>
                        <div className='nav-content-2'>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                                <li>
                                    <a href="">Service</a>
                                </li>
                                <li>
                                    <a href="">{props.name}</a>  
                                </li>  
                                <li>
                                    <a href="">{props.age}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            </nav>
        </>
    )
}
