import React from "react";
import DividerDesktop from "./assets/pattern-divider-desktop.svg";
import DividerMobile from "./assets/pattern-divider-mobile.svg";
import DiceIcon from "./assets/icon-dice.svg";

function App() {
  return (
    // Page
    <div className="flex flex-1 items-center justify-center h-screen bg-darkBlue">
      {/* Middle Box */}
      <div className="flex flex-col relative min-h-52 max-w-60 rounded-xl m-3 py-5 px-10 items-center text-center bg-darkGrayishBlue md:w-96">
        {/* Content - title, quote, divider */}
        <div className="flex flex-1 flex-col mb-8">
          {/* title */}
          <span className="text-sm tracking-widest text-neonGreen">
            ADVICE #177
          </span>

          {/* quote  */}
          <p className="my-5 flex flex-1 text-lg items-center text-lightCyan font-extrabold">
            "It's easy to sit up and take notice,what's difficult is to
            stand-up"
          </p>

          {/* Divider desktop */}
          <img
            src={DividerDesktop}
            alt="divider desktop"
            className="hidden md:flex"
          />
          {/* Divider mobile */}
          <img
            src={DividerMobile}
            alt="divider moile"
            className="flex md:hidden"
          />
        </div>

        {/* Shuffle button  */}
        <button className="flex absolute -bottom-5 p-3 rounded-full bg-neonGreen hover:drop-shadow-3xl">
          <img src={DiceIcon} alt="dice" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
