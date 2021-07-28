import styled from "styled-components"
import colors from "../constants/colors";
import mediaSizes from "../constants/mediaSizes";

const Blocks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        flex-direction: column;
    }
`;
const Block = styled.div`
    width: 24%;
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 4rem;
        flex-direction: column;
    }
`;
const C = styled.div`
    width: 100%;
`;
const Logo = styled.div`
    max-width: 15rem;
    @media (max-width: ${mediaSizes.md.maxWidth}) {margin: 0 auto;}
`;
const SocialMedia = styled.div`
    margin-top: 2rem;
    text-align:center;

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
    width: 100%;
    text-align:center;
   
    // @media (max-width: ${mediaSizes.md.maxWidth}) {
    // }
`;

const H1 = styled.h2`
    text-transform: capitalize;
    margin-bottom: 2rem
`;
const Form = styled.div`
display:flex;
    width:100%;
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