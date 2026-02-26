import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PeatLayer from "./PeatLayer";

type LayerSpec = {
  id: number;
  gradient: string;
  textureOpacity: number;
  height: number;
  offsetX: number;
  rotation: number;
  borderRadius: number;
};

const DEFAULT_LAYER_SPACING = 10;

export default function PeatStack({ count }: { count: number }) {
  const [displayed, setDisplayed] = useState(count);

  // stable specs for each created layer so they persist between renders
  const [layers, setLayers] = useState<LayerSpec[]>(() =>
    Array.from({ length: count }, (_, i) => generateLayer(i)),
  );

  const nextId = useRef(layers.length);
  const intervalRef = useRef<number | null>(null);

  // When displayed increases, create new stable layer specs. When it decreases, trim.
  useEffect(() => {
    if (displayed > layers.length) {
      setLayers((prev) => {
        const needed = displayed - prev.length;
        const additions = Array.from({ length: needed }, (_, i) =>
          generateLayer(nextId.current + i),
        );
        nextId.current += additions.length;
        return [...prev, ...additions];
      });
    } else if (displayed < layers.length) {
      setLayers((prev) => prev.slice(0, displayed));
    }
  }, [displayed, layers.length]);

  // animate displayed count towards target `count`
  useEffect(() => {
    if (count <= displayed) {
      setDisplayed(count);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = window.setInterval(() => {
      setDisplayed((prev) => {
        if (prev >= count) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return count;
        }
        return prev + 1;
      });
    }, 120);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [count, displayed]);

  const layerSpacing = DEFAULT_LAYER_SPACING;
  const containerHeight = Math.max(displayed * layerSpacing, layerSpacing * 4);

  return (
    <div
      className="w-full max-w-2xl mx-auto"
      style={{ position: "relative", height: `${containerHeight}px` }}
    >
      <AnimatePresence>
        {layers.map((spec, index) => (
          <PeatLayer
            key={spec.id}
            index={index}
            total={Math.max(count, 1)}
            delay={index * 0.08}
            bottom={index * layerSpacing}
            height={spec.height}
            gradient={spec.gradient}
            textureOpacity={spec.textureOpacity}
            offsetX={spec.offsetX}
            rotation={spec.rotation}
            borderRadius={spec.borderRadius}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function generateLayer(seed: number): LayerSpec {
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

  const rnd = () => Math.random();

  const gradient = PEAT_GRADIENTS[seed % PEAT_GRADIENTS.length];
  const textureOpacity = TEXTURE_OPACITIES[seed % TEXTURE_OPACITIES.length];
  const height = 6 + Math.floor(rnd() * 8);
  const offsetX = Math.floor((rnd() - 0.5) * 8);
  const rotation = (rnd() - 0.5) * 1.5;
  const borderRadius = Math.floor(rnd() * 4);

  return {
    id: seed,
    gradient,
    textureOpacity,
    height,
    offsetX,
    rotation,
    borderRadius,
  };
}
