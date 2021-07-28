import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Title from "./Title";
import Section from "../styled-components/Section";
import m1 from "../assets/7.jpg";
import m2 from "../assets/3.jpg";
import m3 from "../assets/4.jpg";
import m4 from "../assets/5.jpg";
import m5 from "../assets/6.jpg";
import m6 from "../assets/8.jpg";
import { Meal, Meals, Info, TitleMeal, Price, Img, Im, ViewMore } from "../styles/Menu.style";
import Para from "../styled-components/Para";


export default function Menu({ id }) {
    const meals = [
        {
            id: 1,
            title: "Delicious Pan Cake",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 44.79,
            img: m1
        },
        {
            id: 2,
            title: "KID FRIENDLY RECIPES",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 47.89,
            img: m2
        },
        {
            id: 3,
            title: "EASY BAGEL RECIPE",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 12.41,
            img: m3
        },
        {
            id: 4,
            title: "CUSTOMIZE YOUR PLAN",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 38.99,
            img: m4
        },
        {
            id: 5,
            title: "KID FRIENDLY RECIPES",
            description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
            price: 24.39,
            img: m5
        },
        {
            id: 6,
            title: "DETAILED SHOPPING LIST",
            description: `
            Every menu plan includes a detailed shopping list so you know exactly what to
             buy! You can order your groceries online using grocery pick up or
             delivery from your favorite store and you’ll have everything you need to make dinner!
            `,
            price: 144.31,
            img: m6
        }
    ];
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