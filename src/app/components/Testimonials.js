import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Para from "../styled-components/Para";
import Section from "../styled-components/Section";
import Title from "./Title";
import { Testimonials2, Testimonial, Profile, Img, Info, Username, Rate, Quote } from "../styles/Testimonials.style"
import { AiFillStar } from "react-icons/ai";
import c1 from "../assets/customers/1.jpg";
import c2 from "../assets/customers/2.jpg";
import c3 from "../assets/customers/3.jpg";
import c4 from "../assets/customers/4.jpg";
import c5 from "../assets/customers/5.jpg";
import c6 from "../assets/customers/6.jpg";



export default function Testimonials({ id }) {

    const feedbacks = [
        {
            id: 1,
            customer: "Jerome Gwin",
            customerPic: c1,
            feedback: `I mostly don't like the idea of being restricted…for example some people such as myself both buy and sell under the same account. If someone is a 'bad egg' that should reflect on their feedback no matter which side of the fence they are on.`
        },
        {
            id: 2,
            customer: "Sharlene Moultry",
            customerPic: c2,
            feedback: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 3,
            customer: "Noma Scheuerman",
            customerPic: c3,
            feedback: ` Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`
        },
        {
            id: 4,
            customer: "Majorie Gerrard",
            customerPic: c4,
            feedback: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
        },
        {
            id: 5,
            customer: "Brande Goldenberg",
            customerPic: c5,
            feedback: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `
        },
        {
            id: 6,
            customer: "Wayne Mccawley",
            customerPic: c6,
            feedback: `It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
    ]

    return < Section id={id}> <Container>
        <Center><Title txt="our customers" subtxt="say" /></Center>
        <Testimonials2>
            {
                feedbacks.map(i => <Testimonial key={i.id}>
                    <Profile>
                        <Img>
                            <img src={i.customerPic} alt={i.customerPic} />
                        </Img>
                        <Info>
                            <Username>{i.customer}</Username>
                            <Rate>{[1, 2, 3, 4, 5].map(i => <AiFillStar key={i} fontSize="15" />)}</Rate>
                        </Info>
                    </Profile>
                    <Quote>
                        <FaQuoteLeft />
                        <Para fs="1.3"> {i.feedback}</Para>
                        <FaQuoteRight />
                    </Quote>
                </Testimonial>)
            }
        </Testimonials2>
    </Container></Section >

}