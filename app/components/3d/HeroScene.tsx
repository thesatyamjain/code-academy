"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function DataCore(props: any) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hover, setHover] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2;
        mesh.current.rotation.y += delta * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh
                {...props}
                ref={mesh}
                scale={hover ? 1.2 : 1}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <icosahedronGeometry args={[2, 0]} />
                <MeshDistortMaterial
                    color={hover ? "#00f3ff" : "#bc13fe"} // Cyan on hover, Purple default
                    speed={2}
                    distort={0.4}
                    radius={1}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
                <DataCore />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        font="/fonts/Inter-Bold.ttf" // Note: This might fail if font not loaded, using system font fallback is tricky in Drei Text.
                        // We'll skip custom font prop to use default for now or stick to safe defaults
                        position={[0, -3.5, 0]}
                        fontSize={0.5}
                        color="#e2e8f0"
                        anchorX="center"
                        anchorY="middle"
                    >
                        CLICK THE CORE
                    </Text>
                </Float>
            </Canvas>
        </div>
    );
}
