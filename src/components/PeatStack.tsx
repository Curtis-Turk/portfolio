import { AnimatePresence } from "framer-motion";
import PeatLayer from "./PeatLayer";

export default function PeatStack({ count }: { count: number }) {
  const layers = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col-reverse gap-0.5">
      <AnimatePresence>
        {layers.map((index) => (
          <PeatLayer
            key={index}
            index={index}
            total={count}
            delay={index * 0.15}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
