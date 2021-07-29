import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Title from "./Title";
import { Cards, Card, Img, Price, Body, TitleHead, Stars, Rate, AddBtn } from "../styles/Popular.style"
import Section from "../styled-components/Section";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function Popular({ id }) {

    /**
     * Context
     * */
    const { cards } = useContext(AppContext);



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