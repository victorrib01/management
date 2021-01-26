import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

import '../styles/components/backbutton.css'

interface BackButtonProps {
    to: String
}

const BackButton: FunctionComponent<BackButtonProps> = ({ to }) => {
    return (
        <div id='back-button'>
            <Link to={`/${to}`} >
                <FaArrowLeft size={90} color="#FFF" />
            </Link>
        </div>
    )
}

export default BackButton;