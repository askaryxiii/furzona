import { lazy, memo, Suspense } from "react";
import MainLoginTitle from "../../components/common/Login/MainLoginTitle";
import LightParagraph from "../../components/common/About/LightParagraph";
import Loading from "../../components/common/comonUse/Loading";
import { PetJourny } from "../../components/data/about/aboutContent";

const Hero = lazy(() => import("../../components/common/About/Hero"));
const PetCard = lazy(() => import("../../components/common/About/PetCard"));

const ABOUT_CONTENT = [
  ` We know how happy, healthy, and busy your pets keep you, so with all the resources, videos, articles, services, products, advice, opinions, and ideas out there, we thought you could use a good place to start.`,
  `Wherever you are in your pet parenting journey: from choosing and finding a pet to already loving & caring for pets, all the way through to saying goodbye… Furzona is here to support you every step of the way.`,
  `You’ll find sound advice, trusted providers, and indispensable services here, all in one place.`,
  `Because every pet deserves to be well cared for, by companions who return their love and dedication.`,
];

const About = memo(() => {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <Hero height={"h-120"} />
      </Suspense>
      <section
        id="bodySection"
        className="py-14 lg:px-36 px-10 flex flex-col gap-12">
        <section className=" flex flex-col gap-7">
          <MainLoginTitle
            title={"Everything for pets & pet parents in one place."}
            size={"text-5xl"}
          />
          <div className="flex flex-col gap-3">
            {ABOUT_CONTENT.map((text, i) => (
              <LightParagraph key={i} text={text} textSize="text-xl" />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-9">
          <MainLoginTitle title={"A Pet Parent’s Journey"} size={"text-5xl"} />
          <Suspense fallback={<Loading />}>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
              {PetJourny.map((item, index) => (
                <PetCard key={index} {...item} />
              ))}
            </div>
          </Suspense>
        </section>
      </section>
    </div>
  );
});

export default About;
