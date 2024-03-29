"use client";

import { useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { TbWriting } from "react-icons/tb";
import SiteHeadingH4 from "../components/shared/headings/SiteHeadingH4";
import Selectbox from "../components/shared/Selectbox";
import { Switch } from "antd";
import { PurpleButton } from "../components/shared/buttons/PurpleButton";

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

export default function ReWrite() {
  const [textArea, setTextArea] = useState("");
  const [language, setLanguage] = useState("english");
  const [advanceMood, setAdvanceMood] = useState(false);

  const [tone, setTone] = useState("auto");
  const [length, setLength] = useState("auto");
  const [pointOfView, setPointOfView] = useState("auto");
  const [creativity, setCreativity] = useState("auto");

  const selectChange = (checked: boolean) => {
    setAdvanceMood(checked);
  };

  return (
    <main className="flex">
      <section className="w-2/5 border-e border-[#EFEFEF]">
        <PageTitle title="ReWrite" Icon={TbWriting} />

        <section className="flex flex-col gap-9 px-9 py-6">
          {/* Textarea */}
          <div>
            <SiteHeadingH4 text="Target Text" />
            <textarea
              onChange={(e) => setTextArea(e.target.value)}
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
              <section className="flex w-full gap-3">
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

              <section className="flex w-full gap-3">
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
                    options={languageOption}
                    value={pointOfView}
                    onchange={(state) => setPointOfView(state)}
                  />
                </div>
              </section>
            </section>
          )}

          {/* Submit Buttons */}
          <section className="flex items-end gap-3">
            {/* Choose AI */}
            <div className="w-1/2">
              <SiteHeadingH4 text="Engine" />
              <Selectbox
                options={languageOption}
                value={language}
                onchange={(state) => setLanguage(state)}
              />
            </div>

            <div className="w-1/2">
              <PurpleButton
                onclick={() => console.log("test")}
                disabled={false}
                text="Rewrite"
              />
            </div>
          </section>
        </section>
      </section>
      <section className="w-3/5"></section>
    </main>
  );
}
