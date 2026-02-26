import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PeatStack from "../components/peat/PeatStack";
import { nameEmojis } from "../utils/names";
import { useName } from "../hooks/NameContext";
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
      <Link to="/" style={{ fontSize: 30, textDecoration: "none" }}>
        {nameEmojis[currentName].title}
      </Link>
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
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 48,
          overflowY: "auto",
        }}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              marginBottom: 16,
              position: "sticky",
              top: 0,
              background: "#071014",
              paddingTop: 8,
              paddingBottom: 8,
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#94a3b8",
                  fontSize: 13,
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
                }}
              >
                {layerCount} layer{layerCount !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <PeatStack count={layerCount} />
        </div>
      </div>
    </div>
  );
};

export default Peat;
