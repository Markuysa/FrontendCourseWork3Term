import HeaderMain from "./headerMain";
import '../css/main_page.css'

const MainPage = () =>{
    
    return (
        <div className="wrapper">
            <HeaderMain />
            <div className="main_content">
                <div className="title">
                    <div className="title_header">
                        <span className="title_header_rectangle">Meditation service</span>
                    </div>
                    <div className="title_description">
                        <h1>Be Prepared To <br /> Comprehend The True Being</h1>
                    </div>
                    <div className="title_scroll_button">
                        <a href=""><span className="scroll_button">scroll down</span></a>
                    </div>
                </div>
            </div>
        </div>
    )   

}

export default MainPage;