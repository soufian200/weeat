import React from "react";
import Container from "../styled-components/Container";
import Title from "./Title";
import { Wrap, Content, Block, Img, Right, Txt, Left } from "../styles/Aboutus.style"
import Center from "../styled-components/Center";
import Para from "../styled-components/Para";
import GreenSquares from "./GreenSquares";
import GreenBorder from "./GreenBorder";
export default function AboutUs() {
    return <Wrap>
        <Container>
            <Content>
                <Block>
                    <Left>
                        <Center>
                            <Img />
                        </Center>
                    </Left>
                </Block>
                <Block>
                    <Right>
                        <Txt>
                            <Title txt="about" subtxt="us" />
                            <Para fs="2">There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable</Para>
                            <Para fs="2">
                                by injected humour, or
                                randomised words which Ipsum available, but the majority have suffered
                                alteration in some
                            </Para>
                            <Para fs="2">

                                rando Ipsum available, but the majority.
                            </Para>
                        </Txt>
                    </Right>
                </Block>
                <GreenSquares r="0" />
                <GreenBorder w="40" />
                <GreenBorder w="40" x="100" y="40" />
            </Content>
        </Container>
    </Wrap>
}