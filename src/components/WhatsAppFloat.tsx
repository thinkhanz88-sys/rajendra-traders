import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
      style={{ boxShadow: "0 4px 20px hsl(43, 80%, 55%, 0.4)" }}
    >
      <ArrowUp className="w-5 h-5" style={{ color: "hsl(25, 40%, 18%)" }} />
    </button>
  );
};

export default ScrollToTop;
