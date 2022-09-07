import React from "react";
import { StyledMenu } from "./styles";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Menu: React.FunctionComponent<{ open: any; setOpen: any; menus: any, socials: any, price: string }> =
    ({ open, setOpen, menus, socials, price }) => {
        const handleMenuClick = (e: any) => {
            setOpen(false);
        };

        return (
            <StyledMenu open={open}>
                <div className="burger-menu">
                    {menus.map((element: any) => {
                        if (element.visible) {
                            if (element.toOtherSite) {
                                return (
                                    <a
                                        href={`${element.path}`}
                                        key={element.title}
                                        onClick={handleMenuClick}
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        {element.title}
                                    </a>
                                );
                            } else {
                                return (
                                    <a
                                        href={`${element.path}`}
                                        key={element.title}
                                        onClick={handleMenuClick}
                                    >
                                        {element.title}
                                    </a>
                                );
                            }
                        } else {
                            return <></>;
                        }
                    })}
{/* 
                    <a className={"app-button"} href={"/dashboard"}>
                        APP
                    </a> */}
                </div>
                <div className="burger-social">
                    <ul>
                        {
                            socials.map((element:any) => {
                                return (
                                    <li key={element.name}>
                                        <div className={"follow-item-wrapper"}>
                                <span className={"follow-item-detail"}>
                                    <a
                                        href={element.link}
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        <span className={"follow-item-logo"}>
                                           {element.logo}
                                        </span>
                                        <span className={"follow-item-title"}>
                                            {element.name}
                                        </span>
                                    </a>
                                </span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </StyledMenu>
        );
    };
export default Menu;
