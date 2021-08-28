import React, { Component } from "react";
import { CgProfile } from 'react-icons/cg'
import style from "../style/Header.module.css"

class Header extends Component {
    render () {
        return (
            <div className={style.headerContainer }>
                <h1 className={style.headerTitle}>facebook</h1>
                <p className={style.profile}>Meu Perfil <CgProfile size="20" className={style.icon}/></p>
            </div>
        )
    }
}

export default Header