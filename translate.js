class Translate{

    constructor(joke){

        this.baseURL = "https://translation.googleapis.com";
        this.convertJoke = joke;
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            params: {
                target: "tr",
                key:${API_KEY},
                q: this.convertJoke
            }

        })

    }

    async translateJoke(){

        try{

            const response = await this.axiosObject.get("/language/translate/v2");
            const data = response.data.data.translations[0].translatedText;
    
            return data;

        }catch(err){
            console.log(err);
        }

    }


}


export default function translateModule(translationText){
    const translateFunc = new Translate(translationText).translateJoke();
    return translateFunc;

}