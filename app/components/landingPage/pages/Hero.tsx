import Button from "../../common/Button";
import { Heading } from "../../common/Heading";
import { Note } from "../../common/Note";
import { Paragraph } from "../../common/Paragraph";
import { Tag } from "../../common/Tag";

export default function Hero() {
  return (
    <>
      <Tag title="Built for small, fast teams" className="mb-5" />
      <Heading title="Run your team without the tab switching."/>
      <Paragraph
        title="Novi brings tasks, docs, and conversations into one calm workspace
          built for small, fast moving teams."
      />
      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0 translate-y-4 
      animate-[reveal-up_0.7s_cubic-bezier(0.2,0.7,0.2,1)_forwards] [animation-delay:320ms]"
      >
        <Button buttonName="Start free" size="lg" variant="primary" />
        <Button buttonName="See how it works" size="lg" variant="outline" />
      </div>
      <Note>
        No credit card required
        <span
          className="w-4 h-4 px-2 rounded-full text-gold animate-pulse"
          aria-hidden="true"
        >
          ·
        </span>
        Free for teams up to 5
      </Note>
    </>
  );
}
