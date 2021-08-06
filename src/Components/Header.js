import {Component} from 'react';
import {NavItems} from './NavItems';

import '../Styles/Header.css'
 
class Header extends Component{
    constructor(){
        super();
        this.state={
           clickedNavMenu : false,
        }
    }
    handleClick=()=>{
        this.setState({
            clickedNavMenu : !this.state.clickedNavMenu
        })
    }
    render(){
        return(
            <div className="container NavBar">
                <img src={require('../images/logoWriting.PNG').default} className="logoWriting" alt="logo"/>
                <div className="NavIcon" onClick={this.handleClick}>
                    <i className={this.state.clickedNavMenu ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <ul className={this.state.clickedNavMenu ? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavItems.map((item,index)=>{
                            return(
                            <li key={index}>
                                <a className={item.className} href={item.url}>{item.name}</a>
                            </li>
                            );
                        })
                    }
                </ul>
                <div className="search">SEARCH <i class="bi bi-search"></i></div>
                <div className="signInButton">SIGN IN</div>

            </div>
        );
    }
}
export default Header;