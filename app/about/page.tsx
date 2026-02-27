import Image from "next/image"
import IMG_2015 from "@/public/assets/Markiplier_2015_SXSW.jpg";
import IMG_2016 from "@/public/assets/Markiplier_2016_YT.jpg";

export default function Page() {
  return (
    <>
      <main className="m-8 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64 text-lg md:text-xl **:[p]:my-6 md:**:[p]:my-8">
        <h1 className="text-4xl md:text-5xl text-center my-8">About Markiplier</h1>
        <div className="clear-both" />
        <div className="max-md:flex max-md:justify-center md:float-right md:ml-8 md:mb-8">
          <Image width={256} height={256} src={IMG_2015} alt={"Markiplier in 2015"} />
        </div>
        <p>
          Born as Mark Edward Fischbach on June 28, 1989, known professionally as Markiplier.
          He is most known as a YouTuber and more recently known as a filmmaker and actor.
          His popularity as a YouTuber stems from his creation of &ldquo;Let&apos;s Play&rdquo; videos on indie horror games.
        </p>
        <p>
          Markiplier is best known for his video series playing Five Nights at Freddy&apos;s (FNaF) and its subsequent releases,
          his most viewed video is first episode of the series.
          Following the success of both Markiplier himself and the FNaF franchise,
          he made a guest appearance in the launch trailer for Five Nights at Freddy&apos;s AR: Special Delivery in 2019.
          He has also stated that he was invited to make a guest appearance in the franchise&apos;s film adaptation,
          but was unable to accept as he was preoccupied with the production of his own Iron Lung film adaptation.
        </p>
        <div className="clear-both" />
        <div className="max-md:flex max-md:justify-center md:float-left md:mr-8 md:my-8">
          <Image width={256} height={256} src={IMG_2016} alt={"Markiplier in 2016"} />
        </div>
        <p>
          After broadening his creation methods into amateur skit videos with his friends,
          he eventually went on to create interactive internet video experiences via YouTube and its end-cards.
          He then starred in a TV miniseries adaptation of a popular podcast and novel.
        </p>
        <p>
          Markiplier began development to an Iron Lung film adaptation in 2023,
          after playing the indie video game and becoming captivated by it.
          He announced his plans to release a film adaptation after the original developer accepted the proposal.
          Markiplier&apos;s YouTube channel was placed on the back-burner during the entire development and production of the film,
          only intermittently releasing videos when he had the time.
          After the film premiered in 2026, he almost immediately resumed his prior upload schedule.
        </p>
        <div className="clear-both" />
      </main>
    </>
  );
}
