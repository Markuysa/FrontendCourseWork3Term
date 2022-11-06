
import Page from "./page";
import "../../css/secondaryPagesStyle.css"
const SecondMainPage = ({pagesContent})=>{
    return (
        <div className="SecondaryPages">
            {
                // pagesContent.map( (page) =>
                //     <Page page={page} key={pagesContent.id}/>
                // ) 
                <Page page={pagesContent} key={pagesContent.id}/>
            }
        </div>
    );


}


export default SecondMainPage;