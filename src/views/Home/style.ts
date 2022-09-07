import styled from "styled-components";

export default styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  .button-group {
    position: absolute;
    bottom: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    max-width: 340px;
    left: 50%;
    transform: translateX(-50%);
  }

`;
