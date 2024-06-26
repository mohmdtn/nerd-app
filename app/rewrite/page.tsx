"use client";

import { useContext, useEffect, useRef, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { TbWriting } from "react-icons/tb";
import SiteHeadingH4 from "../components/shared/headings/SiteHeadingH4";
import Selectbox from "../components/shared/Selectbox";
import { Switch } from "antd";
import { PurpleButton } from "../components/shared/buttons/PurpleButton";
import axios, { AxiosResponse } from "axios";
import { markDownText } from "../utils/markDownText";
import { SiteContext } from "../context/SiteContext";
import toast from "react-hot-toast";
import IconSelectbox from "../components/shared/IconSelectBox";

const languageOption = [
  { id: "english", text: "English" },
  { id: "farsi", text: "Persian" },
  { id: "spanish", text: "Spanish" },
];

const toneOption = [
  { id: "auto", text: "Auto" },
  { id: "amicable", text: "Amicable" },
  { id: "casual", text: "Casual" },
  { id: "friendly", text: "Friendly" },
];

const lengthOption = [
  { id: "auto", text: "Auto" },
  { id: "short", text: "Short" },
  { id: "medium", text: "medium" },
  { id: "long", text: "Long" },
];

const creativityOption = [
  { id: "auto", text: "Auto" },
  { id: "medium", text: "medium" },
  { id: "high", text: "High" },
];

const pointOfViewOption = [
  { id: "auto", text: "Auto" },
  { id: "medium", text: "medium" },
  { id: "high", text: "High" },
];

const engineOption = [
  { id: "gpt", text: "GPT-3.5", icon: "/gptIcon.png" },
  { id: "copilot", text: "Copilot", icon: "/copilotIcon.png" },
];

export default function ReWrite() {
  const { setSearchHistory } = useContext(SiteContext);

  const [textArea, setTextArea] = useState("");
  const [language, setLanguage] = useState("english");
  const [advanceMood, setAdvanceMood] = useState(false);

  const [tone, setTone] = useState("auto");
  const [length, setLength] = useState("auto");
  const [pointOfView, setPointOfView] = useState("auto");
  const [creativity, setCreativity] = useState("auto");

  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState("");

  const [engine, setEngine] = useState("gpt");

  const resultRef = useRef<HTMLDivElement>(null);

  const selectChange = (checked: boolean) => {
    setAdvanceMood(checked);
  };

  // const requestToGeneratee = () => {
  // setLoading(true);
  // const prompt = `
  // Please rewrite below text in length ${length} and creativity ${creativity} and tone ${tone} in ${language}.
  // ${textArea}
  // `;

  // const data = {
  //   model: "deepseek-chat",
  //   messages: [{ role: "user", content: prompt }],
  //   stream: true,
  // };

  // axios
  //   .post("https://api.deepseek.com/v1/chat/completions", data, {
  //     headers: {
  //       Authorization: "Bearer sk-d2619482cdaa414383a8d3041cb94837",
  //     },
  //     responseType: "stream",
  //   })
  //   .then(async (res) => {
  //     const chunkData = res.data
  //       .split("\n")
  //       .filter((line: string) => line.trim().startsWith("data:"))
  //       .filter((line: string | string[]) => !line.includes("[DONE]"))
  //       .map((line: string) => JSON.parse(line.substring(line.indexOf("{"))));

  //     chunkData.map(
  //       (chunk: { choices: { delta: { content: string } }[] }) => {
  //         console.log(chunk.choices[0].delta.content);
  //         setApiResult((prev) => prev + chunk.choices[0].delta.content);
  //       },
  //     );
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     toast.error("Connection Error!");
  //   })
  //   .finally(() => setLoading(false));
  // };

  const fetchData = async () => {
    setLoading(true);
    setApiResult("");
    const prompt = `
    Please rewrite below text in length ${length} and creativity ${creativity} and tone ${tone} in ${language}.
    ${textArea}
    `;
    try {
      const response = await fetch(
        "https://api.deepseek.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer sk-d2619482cdaa414383a8d3041cb94837",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: prompt }],
            stream: true,
          }),
        },
      ).finally(() => setLoading(false));

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Check if the response body is a readable stream
      if (response.body && typeof response.body.getReader === "function") {
        const reader = response.body.getReader();

        const streamDataHandler = async () => {
          try {
            const textDecoder = new TextDecoder("utf-8");
            let buffer = "";
            let isFirstEvent = true;

            while (true) {
              const { done, value } = await reader.read();

              if (done) {
                // Stream has ended
                console.log("Stream ended");
                break;
              }

              // Convert Uint8Array to string
              const chunkText = textDecoder.decode(value);
              buffer += chunkText;

              const lines = buffer.split("\n");

              for (let i = 0; i < lines.length - 1; i++) {
                const line = lines[i];

                if (isFirstEvent && line.startsWith("data: ")) {
                  // Trim 'data: ' prefix
                  const eventData = line.substring(6);
                  // Parse event data as JSON
                  const jsonData = JSON.parse(eventData.trim());
                  setApiResult(
                    (prev) => prev + jsonData.choices[0].delta.content,
                  );
                  if (resultRef.current) {
                    // Scroll the element into view
                    resultRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                  // You can handle/process the received data here
                  isFirstEvent = false;
                } else {
                  isFirstEvent = true;
                }
              }

              // Keep the last incomplete line for next iteration
              buffer = lines[lines.length - 1];
            }
          } catch (error) {
            // console.error('Error reading stream:', error);
          }
        };

        // Start processing the stream data
        streamDataHandler();
      } else {
        console.error("Response does not contain a readable stream");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleGenerate = () => {
    fetchData();
    setSearchHistory((searchHistory: any) => [
      ...searchHistory,
      {
        id: Math.random(),
        title: textArea,
        language: language,
        createdAt: new Date(),
      },
    ]);
  };

  return (
    <main className="flex flex-col md:flex-row">
      <section className="border-b border-[#EFEFEF] md:w-1/2 md:border-b-0 md:border-e lg:w-2/5">
        <PageTitle title="ReWrite" Icon={TbWriting} />

        <section className="md: flex flex-col gap-9 px-3 py-6 lg:px-5 xl:px-9">
          {/* Textarea */}
          <div>
            <SiteHeadingH4 text="Target Text" />
            <textarea
              onChange={(e) =>
                textArea.length <= 200 && setTextArea(e.target.value)
              }
              value={textArea}
              placeholder="paste your text that you wish to rewrite or improve ...  "
              className="min-h-64 w-full flex-1 resize-none flex-col rounded-lg bg-[#F8F8F8] p-3 text-xs text-gray-800 outline outline-1 outline-gray-100 hover:outline-purple-500 focus:outline focus:outline-1 focus:outline-purple-600"
            />
            <h6 className="mt-0.5 text-xs text-[#747474]">
              {textArea.length}/200
            </h6>
          </div>

          {/* Language */}
          <div>
            <SiteHeadingH4 text="Language" />
            <Selectbox
              options={languageOption}
              searchMood
              value={language}
              onchange={(state) => setLanguage(state)}
            />
          </div>

          {/* Advance Mood */}
          <div className="flex items-start gap-2">
            <div>
              <Switch
                onChange={selectChange}
                style={{ backgroundColor: advanceMood ? "#9373EE" : "" }}
              />
            </div>
            <div>
              <SiteHeadingH4 margin={false} text="Advanced" />
              <p className="text-sm text-[#747474]">
                More access for more accurate results
              </p>
            </div>
          </div>

          {/* Advance options */}
          {advanceMood && (
            <section className="flex flex-col gap-9">
              <section className="flex w-full flex-col gap-3 md:flex-row">
                {/* Length */}
                <div className="w-full">
                  <SiteHeadingH4 text="Length" />
                  <Selectbox
                    options={lengthOption}
                    value={length}
                    onchange={(state) => setLength(state)}
                  />
                </div>

                {/* Tone Of Voice */}
                <div className="w-full">
                  <SiteHeadingH4 text="Tone Of Voice" />
                  <Selectbox
                    options={toneOption}
                    value={tone}
                    onchange={(state) => setTone(state)}
                  />
                </div>
              </section>

              <section className="flex w-full flex-col gap-3 md:flex-row">
                {/* Creativity */}
                <div className="w-full">
                  <SiteHeadingH4 text="Creativity" />
                  <Selectbox
                    options={creativityOption}
                    value={creativity}
                    onchange={(state) => setCreativity(state)}
                  />
                </div>

                {/* Point Of View */}
                <div className="w-full">
                  <SiteHeadingH4 text="Point Of View" />
                  <Selectbox
                    options={pointOfViewOption}
                    value={pointOfView}
                    onchange={(state) => setPointOfView(state)}
                  />
                </div>
              </section>
            </section>
          )}

          {/* Submit Buttons */}
          <section className="flex flex-col items-end gap-3 md:flex-row">
            {/* Choose AI */}
            <div className="w-full md:w-1/2">
              <SiteHeadingH4 text="Engine" />
              <IconSelectbox
                options={engineOption}
                value={engine}
                onchange={(state) => setEngine(state)}
              />
            </div>

            <div className="w-full md:w-1/2">
              <PurpleButton
                onclick={handleGenerate}
                disabled={textArea.length <= 1 || loading}
                text="Rewrite"
                loading={loading}
              />
            </div>
          </section>
        </section>
      </section>
      <section className="lg::w-3/5 flex items-center px-3 py-6 text-sm md:w-1/2 lg:px-5 xl:px-9">
        <div className="max-w-full" ref={resultRef}>
          <pre
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: markDownText(apiResult),
            }}
          ></pre>
        </div>
      </section>
    </main>
  );
}
