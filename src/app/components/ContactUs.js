import Center from "../styled-components/Center";
import Container from "../styled-components/Container";
import Section from "../styled-components/Section";
import { Block, Content, Left, Right } from "../styles/Aboutus.style";
import { Form, Input, TextArea, SendBtn, Img } from "../styles/ContactUs.style";
import Title from "./Title";


export default function ContactUs({ id }) {
    return < Section id={id}> <Container>

        <Content>
            <Block>
                <Left>
                    <Center><Title txt="constact" subtxt="us" /></Center>
                    <Center>

                        <Form>
                            <Input type="text" name="username" placeholder="Username" />
                            <Input type="email" name="email" placeholder="Email" />
                            <TextArea cols="50" rows="10" placeholder="write a comment..." />
                            <SendBtn>send</SendBtn>
                        </Form>
                    </Center>
                </Left>
            </Block>
            <Block>
                <Right>
                    {/* <FormWrapper> */}
                    <Img />
                    {/* </FormWrapper> */}
                </Right>
            </Block></Content>
    </Container></Section>
}