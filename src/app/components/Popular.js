import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Title from "./Title";
import { Cards, Card, Img, Price, Body, TitleHead, Stars, Rate, AddBtn } from "../styles/Popular.style"
import Section from "../styled-components/Section";
import card1 from "../assets/5.jpg";
import card2 from "../assets/2.jpg";
import card3 from "../assets/3.jpg";
import card4 from "../assets/4.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Popular({ id }) {
    const cards = [
        {
            id: 1,
            title: "breakfast food",
            img: card1,
            price: 120,
            rate: 4.8
        },
        {
            id: 2,
            title: "breakfast food 2",
            img: card2,
            price: 10.99,
            rate: 4.9
        },
        {
            id: 3,
            title: "breakfast food",
            img: card3,
            price: 120,
            rate: 4.9
        },
        {
            id: 4,
            title: "breakfast food 2",
            img: card4,
            price: 10.99,
            rate: 5.0
        }
    ];

    return <Section id={id}>

        <Container>
            <Center><Title txt="Popular" subtxt="we have" /></Center>
            <Cards>
                {
                    cards.map(i => <Card key={i.id}>
                        <Img>
                            <img src={i.img} alt="img" />
                            <Price>$ {i.price}</Price>
                        </Img>
                        <Body>
                            <TitleHead>{i.title}</TitleHead>
                            <Stars>
                                <AiFillStar fontSize={16} />
                                <AiFillStar fontSize={16} />
                                <AiFillStar fontSize={16} />
                                <AiFillStar fontSize={16} />
                                <AiOutlineStar fontSize={16} />
                            </Stars>
                            <Rate>{i.rate.toFixed(1)}</Rate>
                            <Center> <AddBtn>add to card</AddBtn></Center>
                        </Body>
                    </Card>)
                }
            </Cards>
        </Container>

    </Section>
}