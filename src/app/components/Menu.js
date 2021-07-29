import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Title from "./Title";
import Section from "../styled-components/Section";
import { Meal, Meals, Info, TitleMeal, Price, Img, Im, ViewMore } from "../styles/Menu.style";
import Para from "../styled-components/Para";
import AppContext from "../contexts/AppContext";
import { useContext } from "react";


export default function Menu({ id }) {

    /**
     * Context
     * */
    const { meals } = useContext(AppContext);

    return <Section id={id}>

        <Container>
            <Center><Title txt="menu" /></Center>
            <Meals>
                {

                    meals.map(({ id, title, description, img, price }) => <Meal key={id}>
                        <Info>
                            <TitleMeal>{title}</TitleMeal>
                            <Para>{description}</Para>
                            <Price>$ {price}</Price>
                        </Info>
                        <Img>
                            <Center className="pl">

                                <Im>
                                    <img src={img} alt="img" />
                                </Im>
                            </Center>
                        </Img>

                    </Meal>)
                }
            </Meals>
            <Center>
                <ViewMore>view more</ViewMore>
            </Center>
        </Container>
    </Section>
}