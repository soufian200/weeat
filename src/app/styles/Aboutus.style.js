import styled from "styled-components";
import cir1 from "../assets/cir-1.jpg"
import colors from "../constants/colors"
import mediaSizes from "../constants/mediaSizes";

const Wrap = styled.div`
    // background:red;
    padding-bottom: 5rem;
    
`;
const Content = styled.div`
    // background:green;
    display:flex;
    width: 100%;
    position:relative;

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        flex-direction: column
    }
`;
const Block = styled.div`
    // background:white;
    width: 50%;
    padding: 5rem 0;

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        width: 100%;
        
    }
`;
const Right = styled.div`
    padding-left: 2rem;
    display:flex;

    
`;
const Txt = styled.div`
    padding-top: 5rem;

    & > p{
        text-align: start;
    }

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        padding-top: 0
    }
   
   
`;
const Left = styled.div`
`;
const Img = styled.div`
    width: 40rem;
    height: 50rem;
    overflow: hidden;
    border-radius: 1rem;
    background: linear-gradient(to bottom right,${colors.secondary + 20},${colors.secondary + 20}),url('${cir1}');
    background-position: center;
    background-size: cover;
    box-shadow: -1rem 1rem 0 ${colors.secondary};
`;

export { Wrap, Content, Block, Img, Right, Txt, Left }