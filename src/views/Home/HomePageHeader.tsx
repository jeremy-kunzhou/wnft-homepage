import React, { useRef, useState } from "react";
import homeHeaderLogo from "assets/images/logo_with_name.svg";
import Burger from "components/Burger";
import HomePageMenu from "components/HomePageMenu";
import { SocialInfo } from "./socials";
import { useOnClickOutside } from "hooks/useClickOutside";
import styled, { useTheme } from "styled-components";

const MENU_LIST = [
    {
        title: "Home",
        path: "/home",
        visible: true,
        toOtherSite: false,
    },
    {
        title: "DOCS",
        path: "https://docs.ftp.cash",
        visible: true,
        toOtherSite: true,
    },
];

const MenuContainer = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translate(-50%, 0);
    .homepage-header-wrapper {
        height: 90px;
        min-width: 1280px;
        max-width: 1440px;
        width: 100%;
        margin: 0px auto 0;
        padding-left: 36px;
        padding-right: 36px;
        @media only screen and (max-width: 600px) {
            /* background: linear-gradient(
                180deg,
                #000000 0%,
                rgba(0, 0, 0, 0) 100%
            ); */
        }

        .image-wrapper {
            position: absolute;
            top: 0;
            right: 10%;
        }

        .homepage-header {
            display: flex;
            align-items: center;
            opacity: 1;
            height: 90px;

            .homepage-logo {
                margin-left: 40px;

                img {
                    /* width: 60px; */
                }
            }

            .homepage-nav {
                margin-left: 5rem;
                margin-right: 36px;
                width: 100%;

                .homepage-menu ul {
                    display: flex;
                    align-items: center;
                    list-style: none;
                    margin-bottom: 0;

                    li {
                        position: relative;
                        font-size: 1.125rem;

                        & + li {
                            margin-left: 36px;
                            color: ${({ theme }) => theme.colors.secondary};

                            /* a {
                                color: #bfc9de;
                            } */
                        }

                        &.active_link {
                            color: ${(props) =>
                                props.theme.colors["secondary"]};

                            a {
                                color: ${(props) =>
                                    props.theme.colors["secondary"]};
                            }

                            &::after {
                                content: "";
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 2px;
                                background-color: ${(props) =>
                                    props.theme.colors["secondary"]};
                            }
                        }

                        &:nth-child(1),
                        &:nth-child(2) {
                            &:hover {
                                color: ${(props) =>
                                    props.theme.colors["secondary"]};

                                a {
                                    color: ${(props) =>
                                        props.theme.colors["secondary"]};

                                    &::after {
                                        content: "";
                                        position: absolute;
                                        bottom: -10px;
                                        left: 0;
                                        width: 100%;
                                        height: 2px;
                                        background-color: ${(props) =>
                                            props.theme.colors["secondary"]};
                                    }
                                }
                            }
                        }

                        &:nth-child(3) {
                            margin-left: auto;

                            & .price-button {
                                border: 1px solid transparent;
                                border-radius: 111em;
                                background: ${(props) =>
                                    props.theme.colors[
                                        "background-linear-gradient"
                                    ]};
                                display: flex;
                                align-items: center;
                                padding: 0.25em 0.5em 0.25em 0.25em;
                                column-gap: 0.5em;
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
                        }

                        &:last-child {
                            & .app-button {
                                height: 48px;
                                width: 128px;
                                background: ${(props) =>
                                    props.theme.colors["background-light"]};
                                padding: 1rem;
                                border-radius: 111em;
                                color: white;
                                border: 1px solid transparent;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;

                                &:hover {
                                    border-color: ${(props) =>
                                        props.theme.colors["secondary"]};
                                    background-color: transparent;
                                    color: ${(props) =>
                                        props.theme.colors["secondary"]};

                                    &::after {
                                        background-color: transparent;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
            min-width: 320px;
            margin: 0 auto;
            padding: 0;
            position: fixed;

            .image-wrapper {
                display: none;
            }

            .homepage-header {
                border-radius: 0;

                .homepage-nav {
                    display: none;
                }
            }
        }
    }
`;

const HomePageHeader: React.FC<{ price: string }> = (props) => {
    const { price } = props;
    const [open, setOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => setOpen(false));
    const theme = useTheme();

    return (
        <MenuContainer>
            <div className={"homepage-header-wrapper"}>
                <div className={"homepage-header"}>
                    <div className={"homepage-logo"}>
                        <img src={homeHeaderLogo} alt={""} />{" "}
                    </div>
                    <div ref={node}>
                        <Burger open={open} setOpen={setOpen} />
                        <HomePageMenu
                            open={open}
                            setOpen={setOpen}
                            menus={MENU_LIST}
                            socials={SocialInfo}
                            price={price}
                        />
                    </div>
                    <div className={"homepage-nav"}>
                        <div className={"homepage-menu"}>
                            <ul>
                                {/* {MENU_LIST.map((element) => {
                                    if (!element.visible) {
                                        return <></>;
                                    }
                                    if (element.toOtherSite) {
                                        return (
                                            <li key={element.title}>
                                                <a
                                                    href={element.path}
                                                    target={"_blank"}
                                                    rel="noreferrer"
                                                >
                                                    {element.title}
                                                </a>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={element.title}>
                                                <a href={element.path}>
                                                    {element.title}
                                                </a>
                                            </li>
                                        );
                                    }
                                })}
                                <li>
                                    <a
                                        className={"app-button"}
                                        href={"/dashboard"}
                                    >
                                        APP
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </MenuContainer>
    );
};

export default HomePageHeader;
