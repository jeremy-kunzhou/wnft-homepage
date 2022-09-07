import React, { useEffect, useRef, useState } from "react";

import { transform } from "typescript";
import bg1Img from "assets/images/NFT_BG.png";
import bg2Img from "assets/images/1.png";
import bg3Img from "assets/images/2.png";
import bg4Img from "assets/images/3.png";
import bg5Img from "assets/images/4.png";
import styled from "styled-components";
import theme from "utils/theme";

const ImageCardContainer = styled.div`
    /* background: rgba(255, 255, 255, 0.8); */
    border-radius: 12px;
    backdrop-filter: blur(4px);
    .card-wrap {
        display: flex;
        justify-content: center;
        height: 100%;
        transform: perspective(800px);
        transform-style: preserve-3d;
        cursor: pointer;

        &:hover {
            .card-info {
                transform: translateY(0);
            }
            .card-info p {
                opacity: 1;
            }
            .card-info,
            .card-info p {
                transition: 0.6s var(--hoverEasing);
            }
            .card-info:after {
                transition: 5s var(--hoverEasing);
                opacity: 1;
                transform: translateY(0);
            }
            .card-bg {
                transition: 0.6s var(--hoverEasing),
                    opacity 5s var(--hoverEasing);
                opacity: 1;
            }
            .card {
                transition: 0.6s var(--hoverEasing),
                    box-shadow 2s var(--hoverEasing);
                box-shadow: 0 0 40px 5px rgba(255, 255, 255, 0.2),
                    0 0 0 1px rgba(255, 255, 255, 1),
                    0 30px 60px 0 rgba(0, 0, 0, 0.66),
                    inset 0 0 0 5px rgb(46, 215, 175);
            }
            & + .section-content {
                bottom: 10%;
                transition: 0.6s var(--hoverEasing),
                    bottom 2s var(--hoverEasing);
            }
        }
    }

    .card {
        position: relative;
        flex: 0 0 240px;
        width: 240px;
        height: 320px;
        top: 10%;
        /* background-color: #333; */
        overflow: hidden;
        border-radius: 10px;
        /* box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.66); */
        transition: 1s var(--returnEasing);
    }

    .card-bg {
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding: 20px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transition: 1s var(--returnEasing), opacity 5s 1s var(--returnEasing);
        pointer-events: none;
    }

    .section-content {
        pointer-events: none;
        position: absolute;
        bottom: 20%;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        transition: 0.6s var(--hoverEasing),
                    bottom 2s var(--hoverEasing);
        .section-title {
            font-size: 1.5rem;
            font-weight: 500;
        }

        .section-description {
            margin-top: 20px;
            font-size: 1rem;
            line-height: 1.5rem;
            color: ${({ theme }) => theme.colors.subText};
        }
    }
`;

export const ImageCard: React.FC<{ mainImg: any, title: string, description: string }> = ({ mainImg, title, description }) => {
    let width = 530;
    let height = 600;

    let mouseLeaveDelay: NodeJS.Timeout | undefined = undefined;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [mouseP, setMouseP] = useState({
        mouseX: 0,
        mouseY: 0,
    });

    useEffect(() => {
        if (containerRef.current) {
            width = containerRef.current.offsetWidth;
            height = containerRef.current.offsetHeight;
        }
    }, []);

    return (
        <ImageCardContainer
            style={{
                width: `80%`,
                height: `600px`,
                maxWidth: "530px",
                minWidth: "400px",
                position: "absolute",
                zIndex: 0,
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            ref={containerRef}
            onMouseMove={(e) => {
                if (containerRef.current) {
                    const mouseX = e.pageX - containerRef.current.offsetLeft;
                    const mouseY = e.pageY - containerRef.current.offsetTop;

                    setMouseP({
                        mouseX,
                        mouseY,
                    });
                }
            }}
            onMouseEnter={() => {
                clearTimeout(mouseLeaveDelay);
            }}
            onMouseLeave={() => {
                mouseLeaveDelay = setTimeout(() => {
                    setMouseP({
                        mouseX: 0,
                        mouseY: 0,
                    });
                }, 1000);
            }}
        >
            <div className="card-wrap">
                <div
                    className="card"
                    style={{
                        transform: `rotateY(${
                            (mouseP.mouseX / width) * 30
                        }deg) rotateX(${(mouseP.mouseY / height) * -30}deg)`,
                    }}
                >
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage: `url(${mainImg})`,
                            color: "red",
                        }}
                    ></div>
                </div>
            </div>
            <div className="section-content">
                <div className="section-title">{title}</div>
                <div className="section-description">{description}</div>
            </div>
        </ImageCardContainer>
    );
};
