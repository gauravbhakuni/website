

// components
import Hero from "@/components/Hero";
import NewLaunches from "@/components/NewLaunches";
import PopularSection from "@/components/PopularSection";
import SaleSection from "@/components/SaleSection";
import ShopByCollection from "@/components/ShopByCollection";

const Home = () => {
  return (
    <section className="h-full relative">
      <SaleSection />
      <ShopByCollection />
      <NewLaunches />
      <PopularSection />
    </section>
  )
}

export default Home
