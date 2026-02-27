import Image from "next/image";
import IMG_0 from "@/public/assets/A-Heist-with-Markiplier.jpg";
import IMG_1 from "@/public/assets/In-Space-with-Markiplier.jpg";
import IMG_2 from "@/public/assets/The-Edge-of-Sleep.jpg";
import IMG_3 from "@/public/assets/Iron-Lung.webp";
import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export default function Page() {
  return (
    <>
      <main className="m-8 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64 **:text-ig-black dark:**:text-ig-white **:[p]:my-2">
        <h1 className="text-4xl md:text-5xl text-center my-8">Markiplier's Filmography</h1>
        <Timeline>
          <div className="clear-both" />
          <TimelineItem>
            <div className="max-md:flex max-md:justify-center md:float-right md:ml-8 md:mb-8">
              <Image width={128} height={128} src={IMG_0} alt={"A Heist with Markiplier poster"} />
            </div>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>
                <span>2019</span>
              </TimelineTime>
              <TimelineTitle>
                <span>A Heist with Markiplier</span>
              </TimelineTitle>
              <TimelineBody>
                <p>Directed, Written, Starred</p>
                <p>
                  An interactive comedy internet experience that follows Markiplier on a heist that goes wrong,
                  along with his assistant (the viewer's POV).
                  At the end of each video segment, the viewer is prompted to select one of two choices.
                  Each choice the viewer makes will move them towards one of the 31 different endings.
                  The runtime is 90 minutes.
                </p>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <div className="clear-both" />
          <TimelineItem>
            <div className="max-md:flex max-md:justify-center md:float-right md:ml-8 md:mb-8">
              <Image width={128} height={128} src={IMG_1} alt={"In Space with Markiplier poster"} />
            </div>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>
                <span>2022</span>
              </TimelineTime>
              <TimelineTitle>
                <span>In Space with Markiplier</span>
              </TimelineTitle>
              <TimelineBody>
                <p>Co-directed, Written, Starred</p>
                <p>
                  An interactive science fiction and comedy internet experience that follows Markiplier on a spaceship during a multiverse crisis,
                  along with the ship captain (the viewer's POV).
                  This is a sequel to A Heist with Markiplier.
                  The runtime is 255 minutes.
                </p>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <div className="clear-both" />
          <TimelineItem>
            <div className="max-md:flex max-md:justify-center md:float-right md:ml-8 md:mb-8">
              <Image width={128} height={128} src={IMG_2} alt={"The Edge of Sleep poster"} />
            </div>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>
                <span>2024</span>
              </TimelineTime>
              <TimelineTitle>
                <span>The Edge of Sleep</span>
              </TimelineTitle>
              <TimelineBody>
                <p>Starred</p>
                <p>
                  A psychological horror TV miniseries based on the podcast and novel of the same name.
                </p>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <div className="clear-both" />
          <TimelineItem>
            <div className="max-md:flex max-md:justify-center md:float-right md:ml-8 md:mb-8">
              <Image width={128} height={128} src={IMG_3} alt={"Iron Lung poster"} />
            </div>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>
                <span>2026</span>
              </TimelineTime>
              <TimelineTitle>
                <span>Iron Lung</span>
              </TimelineTitle>
              <TimelineBody>
                <p>Directed, Written, Starred, Co-produced, Edited, Financed</p>
                <p>
                  An independent science fiction horror film, serving as Markiplier's theatrical debut as a director, writer, and star actor.
                  The film was entirely independently financed by Markiplier himself.
                  With a production budget of 4 million USD, no commercial advertising, and independently distributed;
                  it grossed 50 million USD in the United States and placed #1 in the box office during its opening weekend.
                  Its runtime is 125 minutes and is rated R.
                </p>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <div className="clear-both" />
        </Timeline>
      </main>
    </>
  );
}
