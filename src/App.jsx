import {Suspense} from "react"
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Earth from "./components/earth"
import './App.css'

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default App
