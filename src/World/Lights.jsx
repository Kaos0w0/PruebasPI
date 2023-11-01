import { useRef } from "react";

const Lights = () => {
    const directionalLightRef = useRef();

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                ref={directionalLightRef}
                position={[10, 10, 5]}
                intensity={1}
                color={"white"}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-far={32}
                shadow-camera-left={-8}
                shadow-camera-right={8}
                shadow-camera-top={8}
                shadow-camera-bottom={-8}
            />
        </>
    )
}

export default Lights;