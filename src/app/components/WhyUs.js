import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Para from "../styled-components/Para";
import Section from "../styled-components/Section";
import { Reasons, Reason, Icon, TitleReason } from "../styles/Whyus.style";
import Title from "./Title";
import deliveryman from "../assets/delivery-man.png"

export default function WhyUs({ id }) {
    return <Section id={id}>

        <Container>
            <Center><Title txt="why chose" subtxt="us" /></Center>
            <Reasons>
                {
                    [1, 2, 3].map(i => <Reason key={i}>
                        <Icon>

                            <img src={deliveryman} alt="" />

                        </Icon>
                        <TitleReason>Super tasty</TitleReason>
                        <Para>
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        </Para>
                    </Reason>)
                }
            </Reasons>
        </Container></Section>
}