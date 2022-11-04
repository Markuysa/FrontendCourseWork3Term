
import Page from "./page";
const SecondMainPage = ({pagesContent})=>{
    console.log(pagesContent)
    return (
        <div>
            {
                pagesContent.map( (page) =>
                    <Page page={page}/>
                ) 
            }
        </div>
    );


}


export default SecondMainPage;