import React from "react";
import StyledThreeComponent from "./style";
import ThreeMeshlines from "components/ThreeMeshline/ThreeMeshlines";
import AppState from "stores/App";

interface IState {
  initialized: boolean;
}

class ThreeComponent extends React.Component<{}, IState> {
  private threeCanvasEl: React.RefObject<HTMLDivElement>;
  static contextType = AppState;

  constructor(props: any) {
    super(props);

    this.state = {
      initialized: false
    };

    this.threeCanvasEl = React.createRef();
  }

  componentDidUpdate() {
    // const { SOME_VAR } = this.context; // get a var from React Context
  }

  componentDidMount() {
    if (!this.state.initialized) {
      this.init();
    }
  }

  init = () => {
    // const appState = this.context; // access to the React Context store

    if (this.threeCanvasEl.current) {
      const threeCanvas = new ThreeMeshlines({
        mountPoint: this.threeCanvasEl.current,
        width: this.threeCanvasEl.current.clientWidth,
        height: this.threeCanvasEl.current.clientHeight
      });
  
      // start draw loop
      this.startDrawing(threeCanvas);
      this.setState({ initialized: true });
    }
  };

  startDrawing(threeCanvas: ThreeMeshlines) {
    const renderLoop = () => {
      threeCanvas.render();
    };

    threeCanvas.setAnimationLoop(renderLoop);
  }

  render() {
    return (
      <StyledThreeComponent
        className="threeComponent"
        initialized={this.state.initialized}
      >
        <div className="visualizationMount" ref={this.threeCanvasEl}></div>
      </StyledThreeComponent>
    );
  }
}

export default ThreeComponent;
