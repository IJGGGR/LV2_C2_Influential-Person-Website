import Image from "next/image";
import IMG_2014 from "@/public/assets/Markiplier_2014_YT.png";
import IMG_2025 from "@/public/assets/Markiplier_2025_YT.png";

export default function Page() {
  return (
    <>
      <main className="m-8 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64 text-lg md:text-xl **:[p]:my-6 md:**:[p]:my-8">
        <h1 className="text-4xl md:text-5xl text-center my-8">Markiplier&apos;s Influence On Me</h1>
        <div className="clear-both" />
        <div className="max-md:flex max-md:justify-center md:float-left md:mr-8 md:mb-8">
          <Image width={256} height={256} src={IMG_2014} alt={"Markiplier in 2014"} />
        </div>
        <p>
          A large portion of my free time while I was younger was spent watching Markiplier&apos;s videos.
          To this day I still watch his videos, though not as much given how little he&apos;s uploaded these past 2 years.
          I&apos;ve gone from just watching his &ldquo;silly&rdquo; gameplay videos to watching his self-financed, self-written, self-edited, self-directed, and self-starred movie &ldquo;Iron Lung&rdquo; in theaters.
        </p>
        <p>
          The personal influence that Markiplier has had on me was through watching his videos,
          I was able to experience many video games that I was not able to experience on my own.
          Both that I was &ldquo;too young&rdquo; to play many of the games that he did and that my parents pretty much only bought me Nintendo games.
        </p>
        <div className="clear-both" />
        <div className="max-md:flex max-md:justify-center md:float-right md:ml-8 md:my-8">
          <Image width={256} height={256} src={IMG_2025} alt={"Markiplier in 2025"} />
        </div>
        <p>
          I watched Markiplier play a lot of horror games, the most memorable being Five Nights at Freddy&apos;s (FNaF).
          I&apos;m still invested in the FNaF franchise after seeing his first viral videos in 2014.
          I&apos;ve seen all of his FNaF videos for all of the games.
          I&apos;ve watched both FNaF movies in theater.
          And now I also watch many other creators that also make FNaF videos.
        </p>
        <p>
          No other celebrity or content creator has had this much of an impact on my life,
          even though it&apos;s just affected the way I spend my free time.
        </p>
        <div className="clear-both" />
      </main>
    </>
  );
}
