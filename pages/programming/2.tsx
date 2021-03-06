import { GetStaticProps, NextPage } from "next";
import Post from "../../components/Post";

interface Props {
  launch: {
    mission: string;
    site: string;
    timestamp: number;
    rocket: string;
  };
}
const IndexPage: NextPage<Props> = ({ launch }) => {
  if (typeof window !== "undefined") {
    const preloadedState = window.__NEXT_DATA__.props;
    console.log("preloadedState11", preloadedState);
  }

  const date = new Date(launch.timestamp);
  return (
    <Post>
      <main>
        <h1>Next SpaceX Launch: {launch.mission}</h1>
        <p>
          {launch.rocket} will take off from {launch.site} on{" "}
          {date.toDateString()}
        </p>
      </main>
    </Post>
  );
};
export default IndexPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/launches/next");
  const nextLaunch = await response.json();
  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  };
};
