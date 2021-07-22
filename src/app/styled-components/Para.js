import styled from "styled-components";
import colors from "../constants/colors";
import mediaSizes from "../constants/mediaSizes";


const Para = styled.p`
    margin-bottom:3.5rem;
    font-size: ${({ fs }) => fs ? fs + "rem" : "1.19rem"};
    color:${colors.graygreen} ;
    max-width: 40rem;

    /**
     * Small Media
     * */ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        text-align:center
    }
`;
export default Para;