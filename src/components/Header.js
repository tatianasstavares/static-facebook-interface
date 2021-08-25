import React, { Component } from "react";
import { CgProfile } from 'react-icons/cg'

class Header extends Component {
    render () {
        return (
            <div className="header-container">
                <h1 className="facebook-title">facebook</h1>
                <p className="profile">Meu Perfil <CgProfile size="24"/></p>
            </div>
        )
    }
}

export default Header