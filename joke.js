class Joke{

    constructor(){
        this.baseURL = "https://api.chucknorris.io";
        this.axiosObject = axios.create({
            baseURL: this.baseURL 
        })
    }


    async getJoke(){

        try{
            const response = await this.axiosObject.get("/jokes/random");
            const value = response.data.value;
            console.log(value);
            return value;
        }catch(err) {
            console.log(err);
        }

    }

}

export default function getJokeModule(){
    const broughtedJoke = new Joke().getJoke();
    return broughtedJoke;
}