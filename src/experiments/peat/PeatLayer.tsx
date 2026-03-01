import { motion } from "framer-motion";

const colours = {
  brown1: "#824C0E",
  brown2: "#7a2f07",
  yellow1: "#BAA229",
  red1: "#B33030",
  grey1: "#4b4b4b",
  green1: "#58AD09",
  yellow2: "#E8E11A",
  blue1: "#42A66D",
  blue2: "#337FBD",
  darkGrey: "#3f3f45",
  brown3: "#8b4a0f",
  brown4: "#665016",
};

export const PEAT_GRADIENTS = [
  "linear-gradient(90deg," + colours.darkGrey + "," + colours.brown2 + ")",
  "linear-gradient(90deg," + colours.yellow1 + "," + colours.brown1 + ")",
  "linear-gradient(90deg," + colours.red1 + "," + colours.green1 + ")",
  "linear-gradient(90deg," + colours.green1 + "," + colours.yellow2 + ")",
  "linear-gradient(90deg," + colours.blue1 + "," + colours.blue2 + ")",
  "linear-gradient(90deg," + colours.brown3 + "," + colours.green1 + ")",
  "linear-gradient(90deg," + colours.brown4 + "," + colours.green1 + ")",
  "linear-gradient(90deg," + colours.blue1 + "," + colours.brown3 + ")",
];

export const TEXTURE_OPACITIES = [0.08, 0.06, 0.1, 0.05, 0.07];

export default function PeatLayer({
  index,
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
