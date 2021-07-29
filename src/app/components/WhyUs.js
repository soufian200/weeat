import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Para from "../styled-components/Para";
import Section from "../styled-components/Section";
import { Reasons, Reason, Icon, TitleReason } from "../styles/Whyus.style";
import Title from "./Title";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";


export default function WhyUs({ id }) {

    /**
    * Context
    * */
    const { whyUsData } = useContext(AppContext);



    return <Section id={id}>
        <Container>
            <Center><Title txt="why chose" subtxt="us" /></Center>
            <Reasons>
                {
                    whyUsData.map(i => <Reason key={i.id}>
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