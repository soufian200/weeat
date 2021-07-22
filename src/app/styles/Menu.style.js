import styled from "styled-components"
import colors from "../constants/colors";

const Meals = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Meal = styled.div`
    width: 50%;
    // background:red;
    max-width: 50rem;
    min-width: 35rem;
    margin-right: 2rem;
    margin-top: 2rem;
    display:flex
`;
const Info = styled.div`
    width: 70%;
    & > p{
        margin-bottom: 2rem;
    }
    // background:green

`;
const TitleMeal = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem
`;
const Price = styled.h2`
    color: ${colors.primary}
`;
const Img = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > .pl{
        width: 12.5rem;
        height: 12.5rem;
        background: transparent; 
        border: solid .1rem ${colors.secondary};
        border-radius: 50%;
        overflow: hidden;
        position:relative;

        :before{
            content: '';
        position:absolute;

            width: 11.5rem;
            height: 11.5rem;
            background:  ${colors.secondary};
            border-radius: 50%;
            overflow: hidden;
        }
    }
   

`;
const Im = styled.div`
    width: 10rem;
    height: 10rem;
    background: ${colors.graygreen};
    border-radius: 50%;
    overflow: hidden;
    position:relative;

    :before{
        content: '';
        width: 100%;
        height: 100%;
        background: ${colors.secondary};
        position: absolute;
        top: 0;
        left: 0;
        opacity: .1;

    }

`


export { Meal, Meals, Info, TitleMeal, Price, Img, Im };