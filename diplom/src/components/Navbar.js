import React, { Fragment } from 'react';
//import banner from './../../../html/img/banner.jpg';

//import headerLogo from './../../../html/img/header-logo.png';
import headerLogo from './../img/header-logo.png';
import { NavLink } from 'react-router-dom';
import { searchItems } from './../actions/actionsStore';
import { useSelector, useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import Slogan from "./Slogan";

export default function Navbar () {
    const dispatch    = useDispatch();
    const { history } = useReactRouter();
    const { count }   = useSelector(state => state.serviceBasketCount);

    //console.log('count',count);

    const handleUpdateBasketIcon = () => {
        const searchFormEl = document.querySelector('[data-id=search-form]');
        searchFormEl.classList.toggle('invisible');
        searchFormEl.querySelector('input').focus()
    };

    const handleSearch = ({target}) => {
        if(target.value) {
            history.push('catalog');
            dispatch(searchItems(target.value))
        }
    };

    const handleToBasket = () => {
        history.push('cart')
    };

    return (
        <>
            <header className='container'>
                <div className='row'>
                    <div className='col'>
                        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                            <NavLink to='/' exact className='navbar-brand'>
                                <img src={headerLogo} alt='Bosa Noga' />
                            </NavLink>
                            <div className='collapase navbar-collapse' id='navbarMain'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item active'>
                                        <NavLink to='/' exact className='nav-link'>Главная</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/catalog' exact className='nav-link'>Каталог</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/about' exact className='nav-link'>О магазине</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/contacts' exact className='nav-link'>Контакты</NavLink>
                                    </li>
                                </ul>
                                <div>
                                    <div className='header-controls-pics'>
                                        <div data-id='search-expander' className='header-controls-pic header-controls-search' onClick={handleUpdateBasketIcon}></div>
                                        {/*<!-- Do programmatic navigation on click to /cart.html -->*/}
                                        <div className='header-controls-pic header-controls-cart' onClick={handleToBasket}>
                                            {count > 0 && (
                                                <>
                                                    <div className='header-controls-cart-full'>{count}</div>
                                                    <div className='header-controls-cart-menu'></div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <form data-id='search-form' className='header-controls-search-form form-inline invisible'>
                                        <input className='form-control' placeholder='Поиск' onChange={handleSearch}/>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <Slogan/>

        </>
    );
}