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
      return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
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
        <Html position={[radius + 1, 0.5, 0]} center>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white px-2 py-1 rounded text-xs"
          >
            {name}
          </motion.div>
        </Html>
      </>
    );
  };

  return (
    <div className="relative  h-96 xl:min-h-screen bg-black flex justify-center items-center">
      <Canvas camera={{ position: [0, 10, 25] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={3} />
          <Stars radius={150} depth={50} count={5000} factor={5} />

          <Sphere args={[2.5, 32, 32]}>
            <meshStandardMaterial emissive="yellow" emissiveIntensity={2} color="orange" />
          </Sphere>
          {/* <Html position={[0, 2.5, 0]} center>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-black text-yellow-400 px-2 py-1 rounded text-sm font-bold"
            >
              Manisha
            </motion.div>
          </Html> */}

          {[5, 7, 9, 12].map((r, i) => (
            <OrbitPath key={i} radius={r} />
          ))}

          {[
            { name: "Mercury", radius: 5, color: "gray", size: 0.4, speed: 1.5 },
            { name: "Venus", radius: 7, color: "orange", size: 0.6, speed: 1.2 },
            { name: "Earth", radius: 9, color: "blue", size: 0.8, speed: 1 },
            { name: "Mars", radius: 12, color: "red", size: 0.7, speed: 0.8 },
          ].map((planet, i) => (
            <Planet key={i} {...planet} />
          ))}

          <Text position={[0, 5, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
            DIGI SKY FUSION 🚀
          </Text>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 px-3 lg:left-10 bg-white/20 backdrop-blur-md text-white p-6 rounded-lg shadow-lg max-w-sm hidden md:block"
      >
        <h1 className="text-2xl font-bold">🚀 Ditch the 9-to-5. Own Your Time. Do What You Love!</h1>
        <p className="text-sm mt-2">
        Freelancing isn’t just work—it’s freedom. Work with dream clients, set your own schedule, and earn on your terms. No office politics, no limits—just you, your skills, and endless opportunities. Whether you’re a designer, writer, coder, or marketer, your next big project is waiting.
        </p>
        <p className="text-sm mt-2 italic text-yellow-400">
        Why wait? The future of work is here, and it’s calling your name.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 bg-[#004930] cursor-pointer text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#366051] transition-all"
        >
          <Link to="/contactus" >Get Started</Link>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10   right-10 bg-white/20 backdrop-blur-md text-white p-6 rounded-lg shadow-lg max-w-sm hidden lg:block"
      >
        <h1 className="text-2xl font-bold">🚀 Hire Smarter. Scale Faster. Succeed Effortlessly!</h1>
        <p className="text-sm mt-2">
        Great businesses are built with great talent. Why struggle with hiring when you can access top-tier freelancers in just a few clicks? Get experts who deliver quality, speed . Whether you need a designer, developer, marketer, or strategist, your perfect match is just a tap away.
        </p>
        <p className="text-sm mt-2 italic text-yellow-400">
        Build your dream team today!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 bg-[#004930] cursor-pointer text-white  px-4 py-2 rounded-lg font-semibold hover:bg-[#366051] transition-all"
        >
         <Link to="/contactus" >Get Started</Link>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ x: -300, y: -100, opacity: 0 }}
        animate={{ x: 300, y: 100, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute w-2 h-2 bg-white rounded-full shadow-md"
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 text-white text-lg font-semibold tracking-wide"
      >
        "Your Business, Beyond the Horizon ✨"
      </motion.div>
    </div>
  );
};

export default SolarSystem;
