import styled from 'styled-components';
import colors from '../constants/colors';

const Cards = styled.div`
    backgound:white;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
`;
const Card = styled.div`
    width: 25rem;
    background:${colors.white};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0 .4rem gray;
    transition: .2s;
    cursor: pointer;
    margin-bottom: 4rem;

    :hover{
        box-shadow: 0 0 3rem gray;
        transform: scale(1.1)
    }

    
`;
const Img = styled.div`
    width: 100%;
    height: 20rem;
    position: relative;
    background:green;
    overflow: hidden;
    &:before{
        content: "";
        position:absolute;
        background: ${colors.secondary};
        width: 100%;
        height: 100%;
        opacity: .12
    }
`;
const Price = styled.div`
    position:absolute;
    padding: 1rem 2rem;
    bottom: 2rem;
    right: 0;
    background: ${colors.secondary};
    box-shadow: 0 0 .3rem gray;
    font-weight: bold;
    font-size:1.4rem;
`;
const Body = styled.div`
    padding: 2rem;
    position:relative
`;
const TitleHead = styled.h1`
    text-transform:capitalize;
    margin-bottom:.5rem
`;
const Stars = styled.div``;
const Rate = styled.h1`
    position: absolute;
    right: 2rem;
    top: 4.4rem;
    font-size: 2.7rem;

`;
const AddBtn = styled.button`
    text-transform: capitalize;
    border-radius: 4rem;
    background: ${colors.secondary};
    font-weight: bold;
    color: ${colors.black};
    width: 100%;
    margin-top: 4rem;
    transition: .2s;
    cursor: pointer;
    :hover{
        opacity: .8;

    }
`;

export { Cards, Card, Img, Price, Body, TitleHead, Stars, Rate, AddBtn }