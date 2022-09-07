import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 20px;
    .footer-wrapper {
        height: 90px;
        min-width: 250px; 
        max-width: 800px; 
        width: 70%;
        margin: 0px auto 0;
        padding-left: 36px;
        padding-right: 36px;
        ul {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 1rem;
            list-style: none;
            li {
                flex-basis: 50px;

                .follow-item-wrapper .follow-item-detail a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
`;

export const HomePageFooter = ({ socials }) => {
    return (
        <FooterContainer>
            <div className="footer-wrapper">
                <ul>
                    {socials.map((element: any) => {
                        return (
                            <li key={element.name}>
                                <div className={"follow-item-wrapper"}>
                                    <span className={"follow-item-detail"}>
                                        <a
                                            href={element.link}
                                            target={"_blank"}
                                            rel="noreferrer"
                                        >
                                            <span
                                                className={"follow-item-logo"}
                                            >
                                                {element.logo}
                                            </span>
                                            {/* <span
                                                className={"follow-item-title"}
                                            >
                                                {element.name}
                                            </span> */}
                                        </a>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </FooterContainer>
    );
};
