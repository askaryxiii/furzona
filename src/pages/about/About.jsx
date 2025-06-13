import { memo } from "react";
import Hero from "../../components/common/About/Hero";
import MainLoginTitle from "../../components/common/Login/MainLoginTitle";
import LightParagraph from "../../components/common/About/LightParagraph";
import PetCard from "../../components/common/About/PetCard";

const About = memo(() => {
  return (
    <div className="">
      <Hero height={"h-120"} />
      <section id="bodySection" className="py-14 px-36 flex flex-col gap-12">
        <section className=" flex flex-col gap-7">
          <MainLoginTitle
            title={"Everything for pets & pet parents in one place."}
            size={"text-5xl"}
          />
          <div className="flex flex-col gap-3">
            <LightParagraph
              text={` Wherever you are in your pet parenting journey: from choosing and finding
      a pet to already loving & caring for pets, all the way through to saying
      goodbye… Furzona is here to support you every step of the way.`}
              textSize={"text-xl"}
            />
            <LightParagraph
              text={` We know how happy, healthy, and busy your pets keep you, so with all the resources, videos, articles, services, products, advice, opinions, and ideas out there, we thought you could use a good place to start.`}
              textSize={"text-xl"}
            />
            <LightParagraph
              text={` You’ll find sound advice, trusted providers, and indispensable services here, all in one place.`}
              textSize={"text-xl"}
            />
            <LightParagraph
              text={` Because every pet deserves to be well cared for, by companions who return their love and dedication.`}
              textSize={"text-xl"}
            />
          </div>
        </section>
        <section className="flex flex-col gap-9">
          <MainLoginTitle title={"A Pet Parent’s Journey"} size={"text-5xl"} />
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <PetCard
              title={"Choose a pet"}
              img={
                "https://www.petplace.com/media_1e6f15252e2edfb864380f5af595215b7e7e6a60a.png?width=2000&format=webply&optimize=medium"
              }
              paragraph={
                "Planning for a new family member is exciting, but it requires a lot of research. Start your matchmaking adventure with our dog breed guide and cat breed guide, or use our search bar for information on reptiles, fish, birds, or any other small pets."
              }
            />
            <PetCard
              title={"Adopt a pet"}
              img={
                "https://www.petplace.com/media_1d4b6a5fa19756bba407ebe1cc6b526f02e9072b9.png?width=2000&format=webply&optimize=medium"
              }
              paragraph={
                "When you adopt from a shelter, you transform an animal’s life with your love. Whether you want to adopt a dog or adopt a cat, you can find your loyal companion in our shelter pet database."
              }
            />
            <PetCard
              title={"Bring your pet home"}
              img={
                "https://www.petplace.com/media_1420aab4582b3a392bf2adda10282febc307a8083.png?width=2000&format=webply&optimize=medium"
              }
              paragraph={
                "Looking for some tips to make homecoming easier for everyone? Start here: Puppy Diaries or Ultimate Guide to Adopting a Kitten."
              }
            />
            <PetCard
              title={"Pet care"}
              img={
                "https://www.petplace.com/media_14556126df3370d86bf112de6fd665d392584bcd6.png?width=2000&format=webply&optimize=medium"
              }
              paragraph={
                "From names to toys and celebrations, you treat your pet like one of the family. Learn how to give your pet all the love they deserve: Pet Care."
              }
            />
            <PetCard
              title={"Find a lost pet"}
              img={
                "https://www.petplace.com/media_13b1aa301fe5d29ceead061b99b0e972e98d0f4b9.png?width=2000&format=webply&optimize=medium"
              }
              paragraph={
                "Pet tags improve the chances of reuniting parents with lost pets. Order yours now and read up on tips to keep your precious pets safe and close: Lost pets."
              }
            />
            <PetCard
              title={"Protect your pet"}
              img={
                "https://www.petplace.com/media_1f40b330d99d8c70afa57948aa5effb0ea78616a9.png?width=2000&format=webply&optimize=medium"
              }
              paragraph={
                "Pet insurance plans may cover accidents, illnesses, and wellness visits. Find providers, get quotes, and compare plans: start here."
              }
            />
          </div>
        </section>
      </section>
    </div>
  );
});

export default About;
