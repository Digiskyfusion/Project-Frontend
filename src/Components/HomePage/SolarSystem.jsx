import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars, Line, Html, Text } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SolarSystem = () => {
  const OrbitPath = ({ radius }) => {
    const points = Array.from({ length: 101 }, (_, i) => {
      const angle = (i / 100) * Math.PI * 2;
      return [Math.cos(angle) *  radius, 0, Math.sin(angle) * radius];
    });
    return <Line points={points} color="white" lineWidth={1} />;
  };

  const Planet = ({ name, radius, color, size, speed }) => {
    const planetRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime() * speed;
      planetRef.current.position.x = radius * Math.cos(t);
      planetRef.current.position.z = radius * Math.sin(t);
    });

    return (
      <>
        <Sphere
          ref={planetRef}
          args={[size, 32, 32]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial color={color} />
        </Sphere>
        {hovered && (
          <Html position={[radius + 1, 0.5, 0]} center>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-black text-white px-2 py-1 rounded text-xs"
            >
              {name}
            </motion.div>
          </Html>
        )}
      </>
    );
  };

  return (
    <div className="relative h-screen bg-black flex justify-center items-center p-4">
      <Canvas camera={{ position: [0, 10, 25] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={3} />
          <Stars radius={150} depth={50} count={5000} factor={5} />

          {/* {/ Sun /} */}
          <Sphere args={[2.5, 32, 32]}>
            <meshStandardMaterial emissive="yellow" emissiveIntensity={2} color="orange" />
          </Sphere>

          {/* {/ Orbit Paths /} */}
          {[5, 7, 9, 12].map((r, i) => (
            <OrbitPath key={i} radius={r} />
          ))}

          {/* {/ Planets /} */}
          {[
            { name: "Mercury", radius: 5, color: "gray", size: 0.4, speed: 1.5 },
            { name: "Venus", radius: 7, color: "orange", size: 0.6, speed: 1.2 },
            { name: "Earth", radius: 9, color: "blue", size: 0.8, speed: 1 },
            { name: "Mars", radius: 12, color: "red", size: 0.7, speed: 0.8 },
          ].map((planet, i) => (
            <Planet key={i} {...planet} />
          ))}

          {/* {/ Title /} */}
          <Text position={[0, 5, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
            DIGI SKY FUSION 🚀
          </Text>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>

      {/* {/ Responsive Sections /} */}
      <div className="absolute inset-x-0 top-10 flex flex-col items-center md:flex-row md:justify-between px-6 md:px-20">
        {["🚀 Ditch the 9-to-5. Own Your Time. Do What You Love!", "🚀 Hire Smarter. Scale Faster. Succeed Effortlessly!"].map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/20 backdrop-blur-md text-white p-4 rounded-lg shadow-lg max-w-xs md:max-w-md text-center md:text-left mb-4 md:mb-0"
          >
            <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
            <p className="text-xs md:text-sm mt-2">
              {index === 0
                ? "Freelancing isn’t just work—it’s freedom. Work with dream clients, set your own schedule, and earn on your terms."
                : "Get top-tier freelancers in just a few clicks. Quality, speed, and innovation—without the overhead."}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 bg-[#004930] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#366051] transition-all"
            >
              <Link to="/contactus">Get Started</Link>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* {/ Footer Quote /} */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 text-white text-sm md:text-lg font-semibold tracking-wide text-center px-4"
      >
        "Your Business, Beyond the Horizon ✨"
      </motion.div>
    </div>
  );
};

export default SolarSystem;
