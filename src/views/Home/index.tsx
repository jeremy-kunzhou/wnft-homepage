import React, { useEffect, useRef, useState } from "react";
import StyledHome from "./style";

import Header from "components/Header";
import ThreeComponent from "components/ThreeComponent";
import ThreeTwo from "components/ThreeTwo";
import ThreeMeshLine from "components/ThreeMeshline";
import { LineBackground } from "components/Background";
import { ImageCard } from "./ImageCard";
import styled from "styled-components";

import ReactFullpage from "@fullpage/react-fullpage";
import "./overrideFullpage.css";
import HomePageHeader from "./HomePageHeader";
import { HomePageFooter } from "./HomePageFooter";
import { SocialInfo } from "./socials";
import bg1Img from "assets/images/NFT_BG.png";
import bg2Img from "assets/images/1.png";
import bg3Img from "assets/images/2.png";
import bg4Img from "assets/images/3.png";
import bg5Img from "assets/images/4.png";

export const HomeWrapper = styled.div`
    overflow-x: hidden;
    width: 100vw;
    background: linear-gradient(155.77deg, #f0faf4 7.64%, #f2f4fc 96.01%);
`;

const SectionWrapper = styled.section`
    position: relative;
    z-index: 10;
    height: 100%;

    .background-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`;

const Button = styled.button`
    background: rgb(46, 215, 175);
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    border: none;
    height: 50px;
    width: 150px;
    cursor: pointer;

    &:hover {
        background: rgba(46, 215, 175, 0.3);
    }
`;

const SecondaryButton = styled(Button)`
    background: rgba(230, 231, 242, 1);
    &:hover {
        background: rgba(230, 231, 242, 0.3);
    }
`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
    /*
     * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
     */
};

const originalColors = [
    "#ff5f45",
    "#0798ec",
    "#fc6c7c",
    "#435b71",
    "orange",
    "blue",
    "purple",
    "yellow",
];

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const fullpages = [
    {
        text: "Section 1",
    },
    {
        text: "Section 2",
    },
    {
        text: "Section 3",
    },
];

const anchors = ["Welcome", "Introduction", "Markets"];

const Home: React.FC = () => {
    useEffect(() => {}, []);

    const sectionsColor = [...originalColors];
    const anchors = ["Welcome", "Introduction", "Markets"];

    const onLeave = (origin, destination, direction) => {
        console.log("onLeave", { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event
    };
    return (
        <HomeWrapper>
            <HomePageHeader price="0.3" />
            <HomePageFooter socials={SocialInfo} />
            <LineBackground />
            <ReactFullpage
                debug /* Debug logging */
                // Required when using extensions
                pluginWrapper={pluginWrapper}
                // fullpage options
                licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
                navigation
                navigationPosition={"right"}
                showActiveTootip
                navigationTooltips={anchors}
                anchors={anchors}
                sectionSelector={SECTION_SEL}
                onLeave={onLeave}
                // sectionsColor={sectionsColor}
                render={({ state, fullpageApi }) => (
                    <ReactFullpage.Wrapper>
                        <div
                            key={"section_1"}
                            className={SEL}
                            data-tooltip="welcom"
                        >
                            <SectionWrapper>
                                <StyledHome className="app">
                                    <ImageCard
                                        mainImg={bg1Img}
                                        title={`Web3’s Native Fresh Tempt`}
                                        description={
                                            "First platform to bring blockchain to real world"
                                        }
                                        styles={{
                                            width: "50%",
                                            height: "45%",
                                            maxWidth: "500px",
                                            minWidth: "300px",
                                            maxHeight: "560px",
                                            top: '40%',
                                        }}
                                        titleStyles={{
                                            fontSize: '2rem'
                                        }}
                                    />
                                    <div className="button-group">
                                        <Button>Launch App</Button>
                                        <SecondaryButton>Launch App</SecondaryButton>
                                    </div>
                                </StyledHome>
                            </SectionWrapper>
                        </div>
                        <div key={"section_2"} className={SEL}>
                            <SectionWrapper>
                                <StyledHome className="app">
                                    <ImageCard
                                        mainImg={bg2Img}
                                        title={`Create Multi-privilege NFTs`}
                                        description={`Brands and dApp devs can airdrop privileges such as coupons, discount cards, rewards programs and exclusive content to target NFT holders without their permission`}
                                        styles={{
                                            width: "50%",
                                            height: "60%",
                                            maxWidth: "500px",
                                            minWidth: "300px",
                                            maxHeight: "560px",
                                            top: '40%',
                                        }}
                                        titleStyles={{
                                            fontSize: '1.5rem'
                                        }}
                                    />
                                </StyledHome>
                            </SectionWrapper>
                        </div>
                        <div key={"section_3"} className={SEL}>
                            <SectionWrapper>
                                <StyledHome className="app">
                                    <ImageCard
                                        mainImg={bg3Img}
                                        title={`Privilege Trading`}
                                        description={`With WNFT, users can trade privileges in the form of order book without losing ownership of their NFTs.`}
                                        styles={{
                                            width: "50%",
                                            height: "60%",
                                            maxWidth: "500px",
                                            minWidth: "300px",
                                            maxHeight: "560px",
                                            top: '40%',
                                        }}
                                        titleStyles={{
                                            fontSize: '1.5rem'
                                        }}
                                   />
                                </StyledHome>
                            </SectionWrapper>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </HomeWrapper>
    );
};

export default Home;
