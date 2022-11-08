import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {
    FaInstagramSquare
} from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className='socials container'>
            <ul className='socials-ul'>
                <li>   <FaTwitterSquare /></li>
                <li>   <FaFacebookSquare /></li>
                <li><FaInstagramSquare /></li>
                <li> <FaGithubSquare /></li>
            </ul>
        </div>

    )
}

export default Footer
