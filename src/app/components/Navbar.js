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

    const ulList = [
        {
            id: 1,
            hash: "home",
            item: "home"
        },
        {
            id: 2,
            hash: "about-us",
            item: "about us"
        },
        {
            id: 3,
            hash: "popular",
            item: "popular"
        },
        {
            id: 4,
            hash: "menu",
            item: "menu"
        },
        {
            id: 5,
            hash: "why-us",
            item: "why us"
        },
        {
            id: 6,
            hash: "testimonials",
            item: "testimonials"
        },
        {
            id: 7,
            hash: "contact-us",
            item: "contact us"
        }
    ]

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
                    {
                        ulList.map(i => <Item key={i.id}><Link href={`#${i.hash}`} onClick={() => setIsOpened(false)}>{i.item}</Link></Item>)
                    }
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