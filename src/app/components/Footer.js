import { AiFillInstagram, AiFillMail, AiOutlineFacebook, AiOutlinePhone, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import Container from "../styled-components/Container";
import Para from "../styled-components/Para";
import Section from "../styled-components/Section";
import { Blocks, Block, Logo, SocialMedia, Wrap, H1, Form, Label, Input, Send, Terms, Copyright } from "../styles/Footer.style";
import logo from "../assets/logo.svg";
import Center from "../styled-components/Center";

export default function Footer() {
    return <><Section>
        <Container>
            <Blocks>
                <Block>
                    <Logo>
                        <img src={logo} alt="logo" />
                    </Logo>
                    <SocialMedia>
                        <AiOutlineFacebook size="30" />
                        <AiOutlineWhatsApp size="30" />
                        <AiFillInstagram size="30" />
                        <AiOutlineTwitter size="30" />
                        <AiOutlineYoutube size="30" />
                    </SocialMedia>
                </Block>
                <Block>
                    <Wrap>
                        <H1>work time</H1>
                        <Para>Mon-Fri 08:00Am - 03:00Pm</Para>
                        <Para>Saturday 08:00Am - 05:00Pm</Para>
                        <Para>Sunday : Closed</Para>
                    </Wrap>
                </Block>
                <Block>
                    <Wrap>
                        <H1>our contacts</H1>
                        <Para>430 Country Club Ave. Week Forest</Para>
                        <Para>NB 23112, London, Uk</Para>
                        <Para><AiOutlinePhone size="18" /> +1 234 854 339</Para>
                        <Para>comapnyName@email.com</Para>
                    </Wrap>
                </Block>
                <Block>
                    <H1>subscribe now</H1>
                    <Form>
                        <Label>Do worry about spam ! we hate too</Label>
                        <Input>
                            <AiFillMail size="18" />
                            <input type="text" name="subscribe" placeholder="Your email" />
                        </Input>
                        <Send>send</Send>
                    </Form>
                    <Terms>
                        <Para><a href="#terms">terms</a> and <a href="#terms">privacy</a></Para>
                    </Terms>
                </Block>
            </Blocks>
        </Container>

    </Section >
        <Center>
            <Copyright>copyright &copy; 2021</Copyright>
        </Center>
    </>
}