import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Para from "../styled-components/Para";
import Section from "../styled-components/Section";
import { Reasons, Reason, Icon, TitleReason } from "../styles/Whyus.style";
import Title from "./Title";
import deliveryman from "../assets/delivery-man.png";
import restaurant from "../assets/restaurant.png"
import spaguetti from "../assets/spaguetti.png"

export default function WhyUs({ id }) {

    const DATA = [
        {
            id: 1,
            img: deliveryman,
            title: "fast delivery",
            description: `If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in 
            the middle of text. If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there`
        },
        {
            id: 2,
            img: restaurant,
            title: "super tasty",
            description: `If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in 
            the middle of text. If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there`
        },
        {
            id: 3,
            img: spaguetti,
            title: "quality food",
            description: `If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in 
            the middle of text. If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there`
        },
    ]

    return <Section id={id}>
        <Container>
            <Center><Title txt="why chose" subtxt="us" /></Center>
            <Reasons>
                {
                    DATA.map(i => <Reason key={i.id}>
                        <Icon>
                            <img src={i.img} alt={i.title} />
                        </Icon>
                        <TitleReason>{i.title}</TitleReason>
                        <Para>{i.description}</Para>
                    </Reason>)
                }
            </Reasons>
        </Container></Section>
}