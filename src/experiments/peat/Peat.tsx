import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PeatStack from "./PeatStack";
import { nameEmojis } from "../../utils/names";
import { useName } from "../../hooks/NameContext";
import { RotateCcw } from "lucide-react";

const Peat = () => {
  const [layerCount, setLayerCount] = useState(0);

  const { currentName } = useName();

  useEffect(() => {
    const intervalID = setInterval(() => {
      const rand = Math.floor(Math.random() * 5) + 1;
      setLayerCount((prev) => prev + rand);
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    if (layerCount > 100) {
      setLayerCount(0);
    }
  }, [layerCount]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#071014",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ fontSize: 30, textDecoration: "none" }}>
          {nameEmojis[currentName].title}
        </Link>
        {layerCount} layer{layerCount !== 1 ? "s" : ""}
        {layerCount > 0 && (
          <button
            type="button"
            onClick={() => setLayerCount(0)}
            style={{
              height: 48,
              width: 48,
              padding: 0,
              border: "1px solid #1f2937",
              color: "#94a3b8",
              background: "transparent",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={16} />
          </button>
        )}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflowY: "auto",
        }}
      >
        <PeatStack count={layerCount} />
      </div>
    </div>
  );
};

export default Peat;
