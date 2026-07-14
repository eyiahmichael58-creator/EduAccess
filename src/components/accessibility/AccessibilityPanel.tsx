import {
  Type,
  Volume2,
  Pause,
  Play,
  Square,
  Contrast
} from "lucide-react";

import { useState } from "react";
import SpeechToText from "./SpeechToText";

export default function AccessibilityPanel() {

  const [contrast, setContrast] = useState(false);

  const [paused, setPaused] = useState(false);



  function changeFont(size: string) {

    if (size === "large") {

      document.documentElement.style.fontSize = "20px";

    }
    else if (size === "small") {

      document.documentElement.style.fontSize = "14px";

    }
    else {

      document.documentElement.style.fontSize = "16px";

    }

  }





  function startReading() {

    window.speechSynthesis.cancel();

    const text = document.body.innerText;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.onend = () => {

      setPaused(false);

    };

    window.speechSynthesis.speak(speech);

  }





  function pauseReading() {

    window.speechSynthesis.pause();

    setPaused(true);

  }





  function resumeReading() {

    window.speechSynthesis.resume();

    setPaused(false);

  }





  function stopReading() {

    window.speechSynthesis.cancel();

    setPaused(false);

  }





  function toggleContrast() {

    const html = document.documentElement;

    if (contrast) {

      html.classList.remove("high-contrast");

      setContrast(false);

    }
    else {

      html.classList.add("high-contrast");

      setContrast(true);

    }

  }





  return (

    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-3xl
        p-6
      "
    >

      <h2
        className="
          text-xl
          font-bold
          mb-6
        "
      >
        Accessibility Center ♿
      </h2>



      {/* Font Control */}

      <div className="mb-6">

        <div
          className="
            flex
            items-center
            gap-3
            mb-3
            font-medium
          "
        >
          <Type size={22} />

          Adjust Text Size

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => changeFont("small")}
            className="px-4 py-2 rounded-xl bg-gray-100"
          >
            A-
          </button>

          <button
            onClick={() => changeFont("normal")}
            className="px-4 py-2 rounded-xl bg-gray-100"
          >
            A
          </button>

          <button
            onClick={() => changeFont("large")}
            className="px-4 py-2 rounded-xl bg-gray-100"
          >
            A+
          </button>

        </div>

      </div>



      {/* Text To Speech */}

      <div className="mb-6">

        <div
          className="
            flex
            items-center
            gap-3
            mb-3
            font-medium
          "
        >
          <Volume2 size={22} />

          Read Text Aloud

        </div>

        <div className="flex gap-3">

          <button
            onClick={startReading}
            className="px-4 py-2 rounded-xl bg-gray-100"
          >
            Start
          </button>

          {
            paused
              ?

              <button
                onClick={resumeReading}
                className="px-4 py-2 rounded-xl bg-gray-100"
              >
                <Play size={18} />
              </button>

              :

              <button
                onClick={pauseReading}
                className="px-4 py-2 rounded-xl bg-gray-100"
              >
                <Pause size={18} />
              </button>
          }

          <button
            onClick={stopReading}
            className="px-4 py-2 rounded-xl bg-gray-100"
          >
            <Square size={18} />
          </button>

        </div>

      </div>



      {/* Contrast */}

      <button
        onClick={toggleContrast}
        className="
          w-full
          p-4
          rounded-xl
          bg-gray-100
          flex
          items-center
          gap-3
          mb-6
        "
      >

        <Contrast size={22} />

        {
          contrast
            ? "☀️ Normal Mode"
            : "🌑 High Contrast Mode"
        }

      </button>



      {/* Speech To Text */}

      <SpeechToText />

    </div>

  );

}