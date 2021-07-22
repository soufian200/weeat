import styled from "styled-components"
import colors from "../constants/colors";

const Gb = styled.div`
    width: ${({ w }) => w + "rem"};
    height: ${({ h }) => h + "rem"};
    border:.1rem solid ${colors.secondary};
    position:absolute;
   
    transform:translate(${({ x }) => x + "rem"},${({ y }) => y + "rem"});
    border-radius: ${({ br }) => br + "rem"};
    z-index: -1;
`;

export default function GreenBorder({ x, y, br = 1, w = 10, h = 10 }) {
    return <Gb br={br} w={w} h={h} x={x} y={y} />
}