import styled from "styled-components"
import colors from "../constants/colors";

const Sqr = styled.div`
    width: 10rem;
    height: 10rem;
    background: ${colors.secondary};
    position:absolute;
    top: ${({ t }) => t};
    right: ${({ r }) => r};
    left: ${({ l }) => l};

    transform: translate(${({ x }) => x + "rem"},${({ y }) => y + "rem"});

    &:after{
        content:"";
        width: 10rem;
        height: 10rem;
        background:transparent;
        border: solid .1rem ${colors.secondary};
        position:absolute;
        z-index: -1;
        top: 2rem;
        right: 2rem;
    }

`;
export default function GreenSquares({ t, r, l, x = 0, y = 0 }) {
    return <Sqr t={t} r={r} l={l} x={x} y={y} />
}