import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Container from '../styled-components/Container';
import { Head, Wrapper, Txt, Title, GetStarted, Circle } from '../styles/Header.style';
import Navbar from './Navbar';
import Para from '../styled-components/Para';
import cir1 from "../assets/1.jpg"
import cir2 from "../assets/2.jpg"
import cir3 from "../assets/3.jpg"



export default function Header({ id }) {
    return <Head id={id}>
        <div className="circle-full"></div>
        <Navbar />
        <Container>
            <Wrapper>
                <div className="circle"></div>

                <Circle img={cir1}><div></div></Circle>
                <Circle img={cir2} r={20} x={50} y={5}><div></div></Circle>
                <Circle img={cir3} r={20} x={54} y={30}><div></div></Circle>

                <Txt>
                    <Title>We Deliver
                        Delicious And
                        Amazing <span>Food</span></Title>
                    <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</Para>
                    <GetStarted>Get Started <FiChevronRight /> </GetStarted>
                </Txt>
            </Wrapper>
        </Container>
    </Head>
}