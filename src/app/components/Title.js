import styled from "styled-components"
import colors from "../constants/colors";

const T = styled.h1`
    font-size: 3rem;
    text-transform:capitalize;
    position:relative;
    padding-bottom: 1rem;
    margin-bottom: 4rem;

    &:after{
        content: '';
        width: 5rem;
        height: .4rem;
        background: ${colors.primary};
        position: absolute;
        bottom: 0;
        left: 0rem;
        transition: .3s;
    }

    & > span{
        color: ${colors.primary};
    }
`;

export default function Title({ txt, subtxt }) {
    return <T>{txt}<span> {subtxt}</span></T>
}