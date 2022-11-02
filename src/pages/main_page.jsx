import HeaderMain from "../components/header";
import '../css/main_page.css'

const MainPage = () =>{
    const scrollDown = () =>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className="wrapper">
            <HeaderMain />
            <div className="first_page_element">
                <div className="title">
                    <div className="title_header">
                        <span className="title_header_rectangle">Meditation service</span>
                    </div>
                    <div className="title_description">
                        <h1>Be Prepared To <br /> Comprehend The True Being</h1>
                    </div>
                    <div className="title_scroll_button">
                        <button onClick={scrollDown}><span className="scroll_button">scroll down</span></button>
                    </div>
                </div>
            </div>
            <div className="second_landing">
                <h1>Coming soon...</h1>
            </div>
            <div className="third_landing">
                <h1>Coming soon...</h1>
            </div>
        </div>
    )   

}

export default MainPage;