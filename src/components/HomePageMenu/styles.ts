import styled from "styled-components";

interface StyledMenuProps {
    open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
    height: 85vh;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }) => (!open ? "translateX(200%)" : "translateX(0%)")};
    transition: all 0.3s ease-in-out;
    width: 100%;
    
    display: ${({ open }) => (!open ? "none" : "flex")};
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors["background-light"]};
    text-align: left;
    padding: 60px 0rem;

    @media (min-width: 600px) {
        display: none;
    }

    .burger-social {
        margin-top: auto;
        padding: 0 1rem 3rem 1rem;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 1rem;
            li {
                flex-basis: 100px;

                .follow-item-wrapper .follow-item-detail a {
                    display: flex;
                    align-items: center;

                    .follow-item-logo {
                        display: flex;
                        align-items: center;
                        width: 30px;
                        svg {
                            fill: #4b5560;
                        }
                    }

                    .follow-item-title {
                        margin-left: 0.5rem;
                        color: ${({ theme }) => theme.colors["text"]};
                    }
                }
            }
        }
    }

    .burger-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;

        a {
            font-size: 1rem;
            text-transform: uppercase;
            padding: 0.75rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: ${({ theme }) => theme.colors["text"]};
            text-decoration: none;
            transition: color 0.3s linear;
            text-align: center;

            @media (min-width: 600px) {
                font-size: 1.5rem;
                text-align: center;
                padding: 1rem 0;
            }

            &:hover {
                color: ${({ theme }) => theme.colors["secondary"]};
            }

            &.price-button {
                margin-top: 1rem;
                border: 1px solid transparent;
                border-radius: 111em;
                background: ${(props) =>
                        props.theme.colors["background-linear-gradient"]};
                display: flex;
                align-items: center;
                justify-content: center;
                padding: .25em .5em .25em .25em;
                column-gap: .5em;
                color: black;
                font-weight: 700;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    border-color: ${(props) =>
                            props.theme.colors["secondary"]};
                    background: transparent;
                    color: ${(props) =>
                            props.theme.colors["secondary"]};

                    &::after {
                        background-color: transparent;
                    }
                }
            }

            &.app-button {
             
                height: 48px;
                background: ${(props) => props.theme.colors["background-dark"]};
                padding: 1rem;
                border-radius: 111em;
                color: white;
                border: 1px solid transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &:hover {
                    border-color: ${(props) => props.theme.colors["secondary"]};
                    background-color: transparent;
                    color: ${(props) => props.theme.colors["secondary"]};

                    &::after {
                        background-color: transparent;
                    }
                }
            }
        }
    }
`;
