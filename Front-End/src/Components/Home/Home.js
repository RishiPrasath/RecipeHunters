import RecentRecipes from "./Child Compoenents/RecentRecipes";
import FeaturedRecipes from "./Child Compoenents/FeaturedRecipes";
import Features from "./Child Compoenents/Features";
import Hero from "./Child Compoenents/Hero";
function Home(){

    return(
        <div className="home">
            <Hero/>
            <RecentRecipes />
            <FeaturedRecipes />
            <Features/>
        </div>
    );
}

export default Home;