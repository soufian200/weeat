import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Title from "./Title";
import { Cards, Card, Img, Price, Body, TitleHead, Stars, Rate, AddBtn } from "../styles/Popular.style"
import Section from "../styled-components/Section";
import card1 from "../assets/c-1.jpg"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import GreenSquares from "./GreenSquares";

export default function Popular() {
    return <Section>

        <Container>
            <Center><Title center={true} txt="Popular" subtxt="we have" /></Center>
            <Cards>
                {
                    [1, 2, 3, 4,].map(i => <Card>
                        <Img>
                            <img src={card1} alt="img" />
                            <Price>$ 120</Price>
                        </Img>
                        <Body>
                            <TitleHead>breakfast food</TitleHead>
                            <Stars>
                                <AiFillStar fontSize={16} />
                                <AiFillStar fontSize={16} />
                                <AiFillStar fontSize={16} />
                                <AiFillStar fontSize={16} />
                                <AiOutlineStar fontSize={16} />
                            </Stars>
                            <Rate>5.0</Rate>
                            <Center> <AddBtn>add to card</AddBtn></Center>
                        </Body>
                    </Card>)
                }
            </Cards>
        </Container>

    </Section>
}