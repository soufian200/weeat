import styled from 'styled-components';
import colors from '../constants/colors';
import mediaSizes from '../constants/mediaSizes';

const Head = styled.div`
    background: ${colors.green50};
    padding-bottom: 10rem;
    position:relative;

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        
        padding-bottom: 0rem;
    }

    .circle-full{
        clip-path:ellipse(49rem 47rem at 84% 4%);
        background: ${colors.secondary};
        position: absolute;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;

        /**
         * Small Media
         * */ 
        @media (max-width: ${mediaSizes.md.maxWidth}) {
            display:none;
        }

        @media (max-width: ${mediaSizes.sm.maxWidth}) {
            clip-path: ellipse(49rem 47rem at 53% -23.5%);
            display: block
        }
        
    }
}
`;
const Circle = styled.div`
    width: ${({ r }) => r ? r + "rem" : "40rem"};
    height: ${({ r }) => r ? r + "rem" : "40rem"};
    transform: translate(${({ x }) => x ? x + "rem" : "77rem"},${({ y }) => y ? y + "rem" : "2rem"});
    background:transparent;
    border: .1rem solid ${colors.green50};
    padding: 2rem;
    border-radius: 50%;
    position: absolute;
    overflow: hidden;
    & > div{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background:${colors.green50};
        background: url('${({ img }) => img}') ;
        background-position: 50% 50%;
        background-size: cover;
        

        :after{
            content: '';
            position:absolute;
            top:50%;
            left: 50%;
            width: 90%;
            height: 90%;
            background: ${colors.secondary + 30} ;
            border-radius: 50%;
           transform:translate(-50%,-50%)
        }
    }

    /**
     * Small Media
     * */ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        display: none;   
    }

`;

const Wrapper = styled.div`

& > div.hero{
    position: absolute;
    transform: translate(61rem, -6rem);
    background: red;
    width: 60rem;
    height: 40rem;
    overflow: hidden;
}

& > div.circle{
    
    :after{
        content:'';
        transform: translate(50rem, -40rem);
        position:absolute;
        content:'';
        width: 90rem;
        height: 90rem;
        border: solid .1rem ${colors.secondary};
        background:transparent;
        border-radius: 50%;
    }}

    /**
     * Small Media
     * */ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        & > div.hero{
            display:none;
        }
        & > div.circle{
            display:none;
            :after{
                display:none;
            }}
       
    }
`;
const Txt = styled.div`
    max-width: 55rem;
    width: 100%;
    padding: 7rem;
    padding-bottom:14rem;
    padding-left:5rem ;
    position:relative;
    z-index:4;

    /**
     * Small Media
     * */ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        display:flex;
        flex-direction: column;
        align-items:center;
        
    }
    @media (max-width: ${mediaSizes.sm.maxWidth}) {
        padding: 4rem 3rem;
    }
`;

const Title = styled.h1`
    font-size: 4.9rem;
    margin-bottom:1.3rem;

    & > span{
        color:${colors.primary}
    }

    /**
     * Small Media
     * */ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        text-align:center;
        // padding: 4rem 3rem;
    }
`;


const GetStarted = styled.button`
    padding: 1.2rem 3rem;
    background:${colors.secondary};
    color:${colors.primary};
    border-radius: 5rem;
    box-shadow: 0 .5rem 3rem ${colors.secondary};
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    &:hover {
        cursor: pointer;
    }
    &  svg{
        transition: .2s;
        position:absolute;
        right: 12%;
    }
    &:hover svg{
        right: 6%;
        
    }
`;


export { Head, Wrapper, Txt, Title, GetStarted, Circle }