import styled from 'styled-components';
import colors from '../constants/colors';
import mediaSizes from '../constants/mediaSizes';
import Center from '../styled-components/Center';

const Nav = styled.nav`
    width: 100%;
    // background:red;
    display: flex;
    align-items:center;
    position:relative;
    z-index:5
`;
const MenuIcon = styled.button`
    display:none;
    cursor: pointer;
    color: ${colors.black};

    /**
     * Small Media
     * */ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        display:flex;
        position:absolute;
        z-index:6;
        right: 0;
        top: 10;
        padding: .5rem;
        border-radius: 50%;
        background: transparent;
        border: solid .1rem transparent;
        
        
        justify-content: center;
        align-items: center;
        transition: .4s;

        &:hover{
            // background: white;
            border: solid .1rem ${colors.black};
        }

        & > svg{
            font-size: 2.3rem;
            
        }
    }
`;
const NavCon = styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content:space-between;
    align-items:center;
    

`

const Logo = styled.div`
    // background:green;
`;
const List = styled.ul`
    display:flex;
    align-items:center;

    /** Small Media **/ 
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: ${colors.green50};
        background: white;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: ${({ isOpened }) => isOpened ?
        "translateX(0)" : "translateX(-100%)"};
        box-shadow: ${({ isOpened }) => isOpened ?
        ".3rem 0rem 1rem gray" : "none"};
        
        transition: .4s;

    }

`;
const Item = styled.li`
display:block;
@media (max-width: ${mediaSizes.md.maxWidth}) {
    margin:2rem 0;
}
`;
const Link = styled.a`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${colors.black};
    padding: 1rem 1rem;
    margin: 0 1rem;
    transition: .1s;
    position: relative;

    :hover{
        color:${colors.primary};
    }

    &:after{
        content: '';
        width: 0rem;
        height: .2rem;
        background: ${colors.primary};
        position: absolute;
        bottom: 0;
        left: 1rem;
        transition: .3s;
        
    }
    &:hover:after{
        width: 2.4rem;
    }

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        font-size: 2rem;
    }
    
`;
const Services = styled(Center)`
    // background:yellow;
    margin-left: 4rem;

    @media (max-width: ${mediaSizes.md.maxWidth}) {
        margin:0;
        margin-top: 4rem;
        
    }
   
`;
const Service = styled(Center)`
    width:3rem;
    height:3rem;
    margin:0.2rem .5rem;
    border-radius: 50%;
    transition: .3s;
    cursor: pointer;

    :hover{
        background: ${colors.secondary};
    }

    & svg{
        color:${colors.balck};
        font-size: 1.6rem;
    }
    @media (max-width: ${mediaSizes.md.maxWidth}) {
        width:5rem;
    height:5rem;
        margin:0.2rem 2rem;

        & svg{
            font-size: 2rem;
        }
    }
`;



export { Nav, NavCon, MenuIcon, Logo, List, Item, Link, Services, Service };