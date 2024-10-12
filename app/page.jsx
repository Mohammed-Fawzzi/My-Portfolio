import About from "./(Components)/about/page";
import FeaturedProjects from "./(Components)/FeaturedProjects/FeaturedProjects";
import Hero from "./(Components)/hero/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}
