import React, { useState } from 'react';
import { Nav, Logo, List, Item, Link, Services, Service, NavCon, MenuIcon } from '../styles/Navbar.style';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiUsers, FiPhoneCall } from 'react-icons/fi';
import logo from "../assets/logo.svg";
import Container from '../styled-components/Container';


export default function Navbar() {

    const [isOpened, setIsOpened] = useState(false)
    const [active, setActive] = useState(false)
    const handleOnMenu = () => setIsOpened(!isOpened);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 90) {
            setActive(true)
        } else { setActive(false) }
    })

    return <Nav active={active}>
        <Container>


            <NavCon>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <MenuIcon onClick={handleOnMenu}>
                    {isOpened ? <AiOutlineClose /> : <AiOutlineMenu />}
                </MenuIcon>
                <List isOpened={isOpened}>
                    <Item><Link href="#home">home</Link></Item>
                    <Item><Link href="#about-us">about us</Link></Item>
                    <Item><Link href="#popular">popular</Link></Item>
                    <Item><Link href="#menu">menu</Link></Item>
                    <Item><Link href="#why-us">why us</Link></Item>
                    <Item><Link href="#testimonials">testimonials</Link></Item>
                    <Item><Link href="#contact-us">contact</Link></Item>
                    <Services>
                        <Service><FiPhoneCall /></Service>
                        <Service><AiOutlineShoppingCart /></Service>
                        <Service><FiUsers /></Service>
                    </Services>
                </List>
            </NavCon>
        </Container>
    </Nav>
}