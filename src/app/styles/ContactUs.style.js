import styled from "styled-components";
import colors from "../constants/colors";
import Center from "../styled-components/Center";
import contactImg from "../assets/contact-us.png"
import mediaSizes from "../constants/mediaSizes";

const FormWrapper = styled(Center)`
    width: 100%;
    // height: 100%;
    background:red;
    padding: 1rem
`;
const Form = styled.form`
    padding: 4rem;
    width: 80%;
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        padding: 0rem;
        width: 100%;
    }
`;

const Input = styled.input`
    background: #fff;
    width: 100%;
    border: 0;
    outline: 0;
    padding: 1.3rem;
    box-shadow: 0 .1rem .2rem ${colors.graygreen};
    margin-bottom: 2rem;
`;
const TextArea = styled.textarea`
    background: #fff;
    width: 100%;
    border: 0;
    outline: 0;
    padding: 1.3rem;
    box-shadow: 0 .1rem .2rem ${colors.graygreen};
    margin-bottom: 2rem;
`;
const SendBtn = styled.button`
    width: 100%;
    text-transform: capitalize;
    background: ${colors.secondary};
    color: #000;
    cursor: pointer;

    :hover{
        opacity: .9;
    }
`;
const Img = styled.div`
    width: 55rem;
    height: 40rem;
    background: url('${contactImg}') no-repeat;
    background-size: cover;
    position: relative;

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        width: 100%;
        height: 22rem;
    }

    :before{
        content: "";
        width: 100%;
        height: 100%;
        border: solid .1rem ${colors.secondary};
        background: transparent;
        position: absolute;
        z-index: -1;
        left: 1rem;
        top: 1rem;
        box-shadow: -2rem -2rem .1rem ${colors.secondary};
    }
`;
export { FormWrapper, Form, Input, TextArea, SendBtn, Img }