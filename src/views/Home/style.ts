import styled from "styled-components";

export default styled.div`
    position: relative;

    width: 100vw;
    height: 100%;

    .landing-image-container {
        position: absolute;
        width: 50%;
        height: 45%;
        left: 50%;
        top: 35%;
        transform: translate(-50%, -50%);
        background-repeat: no-repeat;
        background-position: center;
    }

    .landing-description {
        position: absolute;
        bottom: 32%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.subText};
        text-align: center;
        @media only screen and (max-width: 600px) {
            bottom: 30%;
            font-size: 1rem;
        }
    }

    .button-group {
        position: absolute;
        bottom: 22%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        max-width: 340px;
        left: 50%;
        transform: translateX(-50%);
        @media only screen and (max-width: 600px) {
            bottom: 20%;
        }
    }

    .card-group {
        position: absolute;
        bottom: 40%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        min-width: 340px;
        left: 50%;
        transform: translateX(-50%);
    }

    .flip-card {
        background-color: transparent;
        width: 20%;
        aspect-ratio: 16 / 9;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card.flip-card__flipped .flip-card-inner {
        transform: rotateX(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flip-card-front {
        background-color: white;
        color: ${({ theme }) => theme.colors.text};
        font-size: 2.5rem;

        @media only screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
    }

    .flip-card-back {
        background-color: white;
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.5rem;
        transform: rotateX(180deg);

        @media only screen and (max-width: 600px) {
            font-size: 1rem;
        }
    }
`;
