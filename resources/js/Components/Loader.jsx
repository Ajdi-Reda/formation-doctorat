import React from "react";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <style>{`
          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .loader {
            width: fit-content;
            font-weight: bold;
            font-family: monospace;
            font-size: 30px;
            clip-path: inset(0 3ch 0 0);
            animation: l4 1s steps(4) infinite;
          }

          .loader:before {
            content: "Loading...";
          }

          @keyframes l4 {
            to {
              clip-path: inset(0 -1ch 0 0);
            }
          }
        `}</style>
            </div>
        </div>
    );
};

export default Loader;
