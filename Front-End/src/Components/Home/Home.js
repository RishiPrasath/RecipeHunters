import RecentRecipes from "./Child Compoenents/RecentRecipes";
import FeaturedRecipes from "./Child Compoenents/FeaturedRecipes";
import Features from "./Child Compoenents/Features";
import Hero from "./Child Compoenents/Hero";

function Home(){
    return(
        <>
            <Hero/>
            <RecentRecipes/>
            <FeaturedRecipes/>
            <Features/>
        </>
    );
}

export default Home;