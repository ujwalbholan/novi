import Button from "../../common/Button";
import { Heading } from "../../common/Heading";
import { Note } from "../../common/Note";
import { Paragraph } from "../../common/Paragraph";
import { Tag } from "../../common/Tag";

export default function Hero() {
  return (
    <>
      <Tag title="Built for small, fast teams" />
      <Heading title="Run your team without the tab switching." />
      <Paragraph
        title="Novi brings tasks, docs, and conversations into one calm workspace
          built for small, fast moving teams."
      />
      <div className="hero-actions reveal" style={{ animationDelay: "320ms" }}>
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
