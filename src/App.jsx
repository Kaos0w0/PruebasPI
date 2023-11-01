import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

const App = () => {
    const cameraSettings = {
        position: [0, 0.5, 5],
        fov: 60
    }

    return (
        <>
            <Canvas
                onPointerDown={(e) => {
                    e.target.requestPointerLock()
                  }}
                shadows
                camera={cameraSettings}
            >
                <Experience />
            </Canvas>
        </>
    )
}

export default App;