import { FeatureCard } from "../../common/FeatureCard";
import { Heading } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import { features } from "../constant";

export function Feature() {
  return (
    <>
      <div className="flex flex-col mb-5">
        <Heading
          title="Everything your team needs, nothing it doesn't"
          className="text-start text-3xl sm:text-4xl lg:text-[50px]"
        />
        <Paragraph
          title="Four tools built to work together, so your team stops piecing its
                process together from five different apps."
          className="text-start max-w-140"
        />
      </div>
      <div
        className="grid grid-cols-6 gap-3"
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            eyebrow={feature.eyebrow}
            title={feature.title}
            description={feature.text}
            icon={feature.icon}
            tone={feature.tone}
            size={feature.size}
          />
        ))}
      </div>
    </>
  );
}
