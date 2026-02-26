import { motion } from "framer-motion";

const PEAT_GRADIENTS = [
  "linear-gradient(90deg,#2c1a04,#7a2f07)",
  "linear-gradient(90deg,#3b3410,#2c1a04)",
  "linear-gradient(90deg,#2f2f2f,#4b4b4b)",
  "linear-gradient(90deg,#7a2f07,#6b4500)",
  "linear-gradient(90deg,#232323,#3a3a3a)",
  "linear-gradient(90deg,#8b4a0f,#3f3f45)",
  "linear-gradient(90deg,#665016,#3f3f45)",
  "linear-gradient(90deg,#3f3f45,#8b4a0f)",
];

const TEXTURE_OPACITIES = [0.08, 0.06, 0.1, 0.05, 0.07];

export default function PeatLayer({
  index,
  total,
  delay,
  bottom = 0,
  height = 8,
  gradient,
  textureOpacity = 0.07,
  offsetX = 0,
  rotation = 0,
  borderRadius = 2,
}: {
  index: number;
  total: number;
  delay: number;
  bottom?: number;
  height?: number;
  gradient?: string;
  textureOpacity?: number;
  offsetX?: number;
  rotation?: number;
  borderRadius?: number;
}) {
  const resolvedGradient =
    gradient ?? PEAT_GRADIENTS[index % PEAT_GRADIENTS.length];
  const resolvedTexture =
    textureOpacity ?? TEXTURE_OPACITIES[index % TEXTURE_OPACITIES.length];

  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scaleY: 0.2 }}
      animate={{ y: 0, opacity: 1, scaleY: 1 }}
      transition={{
        delay: delay,
        duration: 0.36,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.18, delay: delay },
      }}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: `${bottom}px`,
        transformOrigin: "bottom",
        display: "flex",
        justifyContent: "center",
        zIndex: index + 1,
      }}
    >
      <div
        style={{
          position: "relative",
          background: resolvedGradient,
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          width: "100%",
          height: `${height}px`,
          transform: `translateX(${offsetX}px) rotate(${rotation}deg)`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            opacity: resolvedTexture,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
    </motion.div>
  );
}
