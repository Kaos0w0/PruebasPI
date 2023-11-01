import React from 'react';
import { OrbitControls } from "@react-three/drei";
import Lights from './World/Lights';
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { Alex } from './World/Characters/Alex';
import { Physics, RigidBody } from '@react-three/rapier'
import { Environment, KeyboardControls } from '@react-three/drei'
import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import { House } from './World/Places/House';
import { Telephone } from './World/Telephone';
import { Text } from "@react-three/drei";
import { useState } from 'react';
const Experience = () => {
    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] }
    ]

    const [telSound] = useState(() => new Audio('/assets/sounds/tel.wav'))
    const [telephone, setTelephone] = useState(false);
    const [pressed, setPressed] = useState('none');

    const handleKeyDown = (e) => {
        if (e.code === 'KeyR') {
            setPressed('r')
        }
    }

    const handleKeyUp = (e) => {
        if (e.code === 'KeyR') {
            setPressed('none')
        }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    if(pressed === 'r' && telephone){
        telSound.currentTime = 0
        telSound.volume = Math.random()
        telSound.play();
    }

    return (
        <>
            {/* <OrbitControls makeDefault /> */}
            <Lights />
            <Physics >
                <KeyboardControls map={keyboardMap}>
                    <Ecctrl maxVelLimit={5} capsuleRadius={0.35} floatHeight={0.4} capsuleHalfHeight={0.3} friction={0.1} name='Telephone'>
                        <Alex position={[0, -0.45, 0]} scale={0.5} />
                    </Ecctrl>
                </KeyboardControls>
                <RigidBody>
                    <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow >
                        <planeGeometry attach="geometry" args={[15, 11]} />
                        <meshStandardMaterial />
                    </mesh>
                </RigidBody>
                <RigidBody type='fixed' onCollisionEnter={({ manifold, target, other }) => {
                        if (other.rigidBodyObject) {
                            if (other.rigidBodyObject.name === "Telephone") {
                                setTelephone(true);
                            }
                        }
                    }}
                    onCollisionExit={({ manifold, target, other }) => {
                        setTelephone(false);
                    }}>
                    {telephone &&
                        <Text color="black" fontSize={0.09} position={[0.5,0.4,-2]}>
                            Presiona R para interactuar
                        </Text>
                    }
                    <Telephone position={[0.6, -0.5, -2.4]} color='red' scale={0.6} rotation-y={-Math.PI/2} />
                </RigidBody>
                {/* <RigidBody type='static'>
                    <mesh position={[0.6,0,-3]} rotation-z={Math.PI/2} receiveShadow >
                        <boxGeometry args={[1, 1]} />
                        <meshStandardMaterial />
                    </mesh>
                </RigidBody>
                <RigidBody type='static'>
                    <mesh position={[3.5,0,-3]} rotation-z={Math.PI/2} receiveShadow >
                        <boxGeometry args={[1, 4.2]} />
                        <meshStandardMaterial />
                    </mesh>
                </RigidBody> */}

                <House position={[-5.5, -1.9, 0]} />
            </Physics>
        </>
    )
}

export default Experience;