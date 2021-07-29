import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Para from "../styled-components/Para";
import Section from "../styled-components/Section";
import Title from "./Title";
import { Testimonials2, Testimonial, Profile, Img, Info, Username, Rate, Quote } from "../styles/Testimonials.style"
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";



export default function Testimonials({ id }) {

    /**
    * Context
    * */
    const { feedbacks } = useContext(AppContext);



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