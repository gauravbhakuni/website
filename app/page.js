

// components
import Hero from "@/components/Hero";
import NewLaunches from "@/components/NewLaunches";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import ShopByCollection from "@/components/ShopByCollection";

const Home = () => {
  return (
    <section className="h-full relative">
      <Hero />
      <Section1 />
      <ShopByCollection />
      <NewLaunches />
    </section>
  )
}

export default Home
