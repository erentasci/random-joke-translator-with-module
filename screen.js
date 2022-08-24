import getJokeModule from "./joke.js";
import translateModule from "./translate.js";

class Screen{

    constructor(){
        this.jokeTag = document.querySelector(".getJoke");
        this.translateJokeTag = document.querySelector(".translateContainer")
        this.getJokeButton = document.querySelector("#get-joke-button");
        this.getJokeButton.addEventListener("click",()=>{
            this.resultsFunc()

        }

        )

    }

    async resultsFunc(){
        
        const broughtedJoke = await getJokeModule();
        const translatedJoke = await translateModule(broughtedJoke);

        const results = {
            broughtedJoke,
            translatedJoke
        }

        this.printResults(results);
    }


    printResults(result){

     this.jokeTag.innerHTML = 
      `
     
        <p id="getjoke">   


                ${result.broughtedJoke}


        </p>`

          

          this.translateJokeTag.innerHTML = 
          `

             <p id="translatejoke">   
                 ${result.translatedJoke}
             </p>
          `

     }

}

new Screen();