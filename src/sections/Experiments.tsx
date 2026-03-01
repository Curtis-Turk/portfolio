import { SECTION } from "../utils/sections";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";

interface ExperimentsProps {
  onIntersect: (isIntersecting: boolean) => void;
}

function Experiments({ onIntersect }: ExperimentsProps) {
  const ref = useIntersectionObserver(onIntersect);

  return (
    <section id={SECTION.EXPERIMENTS} ref={ref} className="section">
      <Link to="experiments/peat" style={{ fontSize: 13, color: "#92400e" }}>
        Peat
      </Link>
    </section>
  );
}

export default Experiments;
