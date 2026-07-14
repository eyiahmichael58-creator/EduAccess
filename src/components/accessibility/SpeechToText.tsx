import { useRef, useState } from "react";
import { Mic, Square, Trash2 } from "lucide-react";

export default function SpeechToText() {

  const [listening, setListening] = useState(false);

  const [text, setText] = useState("");

  const [status, setStatus] = useState("Not Listening");

  const recognitionRef = useRef<any>(null);




  function startListening() {

    if (listening) return;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition is not supported in this browser."
      );

      return;

    }

    const recognition = new SpeechRecognition();

    recognitionRef.current = recognition;

    recognition.lang = "en-US";

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.onstart = () => {

      setListening(true);

      setStatus("🎤 Listening...");

    };

    recognition.onresult = (event: any) => {

      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {

        transcript += event.results[i][0].transcript;

      }

      setText(transcript);

    };

    recognition.onerror = (event: any) => {

      console.log(event.error);

      setStatus("❌ Error occurred");

      setListening(false);

    };

    recognition.onend = () => {

      setListening(false);

      setStatus("Not Listening");

    };

    recognition.start();

  }





  function stopListening() {

    if (recognitionRef.current) {

      recognitionRef.current.stop();

    }

    setListening(false);

    setStatus("Not Listening");

  }





  function clearText() {

    setText("");

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

      <h3
        className="
          text-xl
          font-bold
          mb-2
        "
      >
        Speech To Text 🎤
      </h3>

      <p
        className="
          text-sm
          text-gray-500
          mb-4
        "
      >
        {status}
      </p>

      <textarea

        value={text}

        readOnly

        placeholder="Your speech will appear here..."

        className="
          w-full
          h-32
          rounded-2xl
          border
          p-4
          resize-none
          outline-none
        "

      />



      <div className="flex gap-3 mt-4">

        <button

          onClick={
            listening
              ? stopListening
              : startListening
          }

          className="
            flex-1
            bg-black
            text-white
            py-3
            rounded-xl
            flex
            justify-center
            items-center
            gap-2
          "

        >

          {

            listening

              ?

              <>

                <Square size={18} />

                Stop Listening

              </>

              :

              <>

                <Mic size={18} />

                Start Speaking

              </>

          }

        </button>



        <button

          onClick={clearText}

          className="
            px-4
            rounded-xl
            border
            border-gray-300
            hover:bg-gray-100
          "

        >

          <Trash2 size={20} />

        </button>

      </div>

    </div>

  );

}