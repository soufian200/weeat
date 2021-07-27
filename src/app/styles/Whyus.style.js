import styled from "styled-components"
import colors from "../constants/colors";
import mediaSizes from "../constants/mediaSizes";
import Center from "../styled-components/Center";

const Reasons = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: ${mediaSizes.sm.maxWidth}) {
        flex-wrap:wrap;
    }
`;
const Reason = styled.div`
    width: 50%;
    min-width: 18rem;
    max-width: 26rem;
    padding: 2rem;
    border: solid .1rem ${colors.secondary};
    border-radius: 1.2rem;
    
    :nth-child(2){ margin: 0 4rem; }

    & > p{text-align:left;}

    @media (max-width: ${mediaSizes.lg.maxWidth}) {
        :nth-child(2){ margin:0 1rem; }
        width: 30%;
    }

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        :nth-child(2){ margin: 0 1rem; }
        width: 100%;
    }

    @media (max-width: ${mediaSizes.sm.maxWidth}) {
        :nth-child(2){ margin: 2rem 0rem; }
    }
`;
const Icon = styled(Center)`
    width: 7rem;
    height: 7rem;
    background: ${colors.secondary + "7a"};
    border-radius: 50%;
    overflow: hidden;
    padding: 1.3rem;
    margin-bottom: 3rem;
    & > svg{
        font-size: 3rem
    }
`;
const TitleReason = styled.h2`
    position: relative;
    margin-bottom: 2rem;
    text-transform: capitalize;
    &:after{
        content: '';
        width: 5.5rem;
        height: .3rem;
        background: ${colors.primary};
        position: absolute;
        bottom: -.6rem;
        left: 0;
        transition: .3s;
    }
`;

export { Reasons, Reason, Icon, TitleReason }