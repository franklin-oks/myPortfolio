import Nav from "../nav/Nav";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <div className="bg-neutral-100 p-4 pt-[8rem] lg:pt-8 dark:bg-neutral-900 w-full min-h-screen">
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
