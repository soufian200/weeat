import styled from "styled-components";
import colors from "../constants/colors";
import mediaSizes from "../constants/mediaSizes";
import Center from "../styled-components/Center";

const Testimonials2 = styled(Center)`
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Testimonial = styled.div`
    width: 32%;
    background: #fff;
    box-shadow: 0 .3rem .1rem ${colors.graygreen};
    margin-top: 2rem;
    border-radius: 1rem;
    padding: 2rem;

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        width: 49%;
        margin-top: 1rem;
    }
    @media (max-width: ${mediaSizes.sm.maxWidth}) {
        width: 100%;

    }
    
`;
const Profile = styled(Center)`
    justify-content: flex-start;
    margin-bottom: 2rem;
`;
const Img = styled.div`
    width: 7rem;
    height: 7rem;
    background: #ccc;
    margin-right: 2rem;
    border-radius: 50%;
    overflow: hidden;
`;
const Info = styled.div``;
const Username = styled.h2`text-transform: capitalize`;
const Rate = styled.div`
    & svg{
        color:${colors.secondary};
    }
`;
const Quote = styled.div`

    & p{
        margin: 0 1rem;
        display: inline;
    }

    & svg{
        color: #000;
    }
`;

export { Testimonials2, Testimonial, Profile, Img, Info, Username, Rate, Quote };