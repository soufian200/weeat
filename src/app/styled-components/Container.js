import styled from "styled-components";
import mediaSizes from "../constants/mediaSizes";

const Container = styled.div`
    // max-width: 1140px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${mediaSizes.sm.maxWidth}) {
        width: 90%;
        // background: black;
    }
    
    @media (min-width: ${mediaSizes.sm.maxWidth}) {
        max-width: ${mediaSizes.sm.maxContainer};
        // background: orange;
    }

    @media (min-width: ${mediaSizes.md.maxWidth}) {
        max-width: ${mediaSizes.md.maxContainer};
        // background: yellow;
    }

    @media (min-width: ${mediaSizes.lg.maxWidth}) {
        max-width: ${mediaSizes.lg.maxContainer};
        // background: blue;
    }

    @media (min-width: ${mediaSizes.xl.maxWidth}) {
        max-width: ${mediaSizes.xl.maxContainer};
        // background:purple;
    }
    @media (min-width: ${mediaSizes.xxl.maxWidth}) {
        max-width: ${mediaSizes.xxl.maxContainer};
        // background:red;
    }
`;
export default Container;