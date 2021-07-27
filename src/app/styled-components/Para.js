import styled from "styled-components";
import colors from "../constants/colors";

const Para = styled.p`
    margin-bottom:3.5rem;
    font-size: ${({ fs }) => fs ? fs + "rem" : "1.19rem"};
    color:${colors.graygreen} ;
    max-width: 40rem;
`;
export default Para;