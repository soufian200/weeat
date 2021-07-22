import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Title from "./Title";

import Section from "../styled-components/Section";
import m1 from "../assets/m-1.jpg"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import GreenSquares from "./GreenSquares";
import { Meal, Meals, Info, TitleMeal, Price, Img, Im } from "../styles/Menu.style";
import Para from "../styled-components/Para";
import { useState } from "react";

export default function Menu() {
    const [meals, setMeals] = useState([
        {
            id: 1,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 44.79,
            img: m1
        },
        {
            id: 2,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 47.89,
            img: m1
        },
        {
            id: 3,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 12.41,
            img: m1
        },
        {
            id: 4,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 38.99,
            img: m1
        },
        {
            id: 5,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 24.39,
            img: m1
        },
        {
            id: 6,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 144.31,
            img: m1
        }
    ])
    return <Section>

        <Container>
            <Center><Title center={true} txt="menu" /></Center>
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
        </Container>
    </Section>
}