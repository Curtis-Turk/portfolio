import { motion } from "framer-motion";
import { Layers, RotateCcw } from "lucide-react";
import { useCallback, useState } from "react";
import PeatStack from "../components/PeatStack";

const Peat = () => {
  const [inputValue, setInputValue] = useState("");
  const [layerCount, setLayerCount] = useState(0);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const num = parseInt(inputValue, 10);
      if (num > 0) {
        setLayerCount((prev) => prev + num);
        setInputValue("");
      }
    },
    [inputValue],
  );

  const handleReset = useCallback(() => {
    setLayerCount(0);
    setInputValue("");
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={undefined}
        style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 32 }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            maxWidth: 384,
            margin: "0 auto",
          }}
        >
          <div style={{ position: "relative", flex: 1 }}>
            <input
              type="number"
              min="1"
              placeholder="Add layers"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                background: "#0b1113",
                border: "1px solid #1f2933",
                color: "#fff",
                height: 48,
                textAlign: "center",
                fontSize: 18,
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
                outline: "none",
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 6,
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!inputValue || parseInt(inputValue) < 1}
            style={{
              height: 48,
              padding: "0 24px",
              background: "#92400e",
              color: "#fff",
              fontWeight: 500,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              opacity: !inputValue || parseInt(inputValue) < 1 ? 0.3 : 1,
            }}
          >
            Add
          </button>
          {layerCount > 0 && (
            <button
              type="button"
              onClick={handleReset}
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
        </form>
      </motion.div>

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
          <PeatStack count={layerCount} />
        </div>
      </div>
    </div>
  );
};

export default Peat;
