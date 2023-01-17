import RecentRecipes from "./Child Compoenents/RecentRecipes";
import FeaturedRecipes from "./Child Compoenents/FeaturedRecipes";
import Features from "./Child Compoenents/Features";

function Home(){

    return(

        <>
            <h1>Home Page</h1>
            <RecentRecipes/>
            <FeaturedRecipes/>
            <Features/>
        </>


    );


}


export default Home;