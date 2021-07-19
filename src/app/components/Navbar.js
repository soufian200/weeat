import React, { useState } from 'react';
import { Nav, Logo, List, Item, Link, Services, Service, NavCon, MenuIcon } from '../styles/Navbar.style';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiUsers, FiPhoneCall } from 'react-icons/fi';



export default function Navbar() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "home",
        },
        {
            id: 2,
            title: "about us",
        }, {
            id: 3,
            title: "menu",
        },
        {
            id: 4,
            title: "testimonials",
        }
        , {
            id: 4,
            title: "contact",
        }
    ])

    const [isOpened, setIsOpened] = useState(false)

    const handleOnMenu = () => setIsOpened(!isOpened)

    return <Nav>
        {/* <Container> */}
        <NavCon>


            <Logo>
                <h1>weeat</h1>
            </Logo>
            <MenuIcon onClick={handleOnMenu}>
                {isOpened ? <AiOutlineClose /> : <AiOutlineMenu />}

            </MenuIcon>
            <List isOpened={isOpened}>
                {items.map((item, index) => <Item key={index}><Link href={`#${item.title}`}>{item.title}</Link></Item>)}
                <Services>
                    <Service><FiPhoneCall /></Service>
                    <Service><AiOutlineShoppingCart /></Service>
                    <Service><FiUsers /></Service>
                </Services>
            </List>
        </NavCon>
        {/* </Container> */}
    </Nav>
}