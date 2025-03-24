// // components/LovifyLogo.tsx
// import { Heart } from "lucide-react";

// const LovifyLogo = () => (
//     <div className="flex items-center space-x-2">
//         <h1 className="text-4xl font-black tracking-tight gradient-text font-montserrat">
//             Lov<span className="text-lovify-pink">i</span>fy
//         </h1>
//     </div>
// );

// export default LovifyLogo;

// components/LovifyLogo.tsx
import { useEffect } from "react";

const LovifyLogo = () => {
  useEffect(() => {
    const styleId = "lovify-logo-pulse-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.75;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <h1
        style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: "linear-gradient(to right, #FF5E8E, #8A2BE2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Lov
        </span>

        <span
          style={{
            color: "#FF5E8E",
            animation: "pulse 1.5s infinite",
            margin: "0 0.05em",
          }}
        >
          i
        </span>

        <span
          style={{
            background: "linear-gradient(to right, #FF5E8E, #8A2BE2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          fy
        </span>
      </h1>
    </div>
  );
};

export default LovifyLogo;

