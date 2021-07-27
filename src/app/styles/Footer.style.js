import styled from "styled-components"
import colors from "../constants/colors";

const Blocks = styled.div`
    width: 100%;
    // background: red;
    display: flex;
    justify-content: space-between;
`;
const Block = styled.div`
    // background: green;
    width: 24%;
`;
const C = styled.div`
    // background:green
`;
const Logo = styled.div`
    max-width: 15rem;
`;
const SocialMedia = styled.div`
    margin-top: 2rem;

    & > svg{
        margin: 1rem;
        color: #000
    }
`;
const Wrap = styled.div`
    & > p{
        margin: 0;
        margin-bottom: 1rem
    }
`;

const H1 = styled.h2`
    text-transform: capitalize;
    margin-bottom: 2rem
`;
const Form = styled.div`
display:flex;
    flex-direction: column;
`;
const Label = styled.div`
    font-size: 1rem;
    color: gray;
    margin-bottom: .4rem
`;
const Input = styled.div`
    background: #fff;
    display:flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 1rem;
    box-shadow: 0 .1rem .2rem gray;

    & > input{
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: 0;
        outline: 0;
        background: transparent;
    }
`;
const Send = styled.button`
    text-transform: capitalize;
    background: ${colors.secondary};
    color: #000;
    cursor: pointer;

    :hover{
        opacity: .9;
    }
`;

const Terms = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    & p{
        margin: 0;
    }
    & a{
        color: ${colors.primary};
        &:hover{
            text-decoration: underline
        }
    }
`;

export { Blocks, Block, C, Logo, SocialMedia, Wrap, H1, Form, Label, Input, Send, Terms }