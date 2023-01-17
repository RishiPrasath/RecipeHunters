import RecipeElementMain  from "./Child Compoenents/RecipeElementMain"
import Breadcrumb from "./Child Compoenents/Breadcrumb"
import Modal from "./Child Compoenents/Modal"
function Recipe(){

    return(

        <>
            <p>Recipe Page</p>
            <Breadcrumb/>
            <Modal/>
            <RecipeElementMain/>
            
        </>


    );


}


export default Recipe;