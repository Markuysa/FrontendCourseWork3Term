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
        <div className="main-wrapper">
            <HeaderMain />
            <div className="main__firstPage">
                <div className="firstPage__title">
                    <div className="firstPage_title__header">
                        <span className="title__header_rect">Meditation service</span>
                    </div>
                    <div className="firstPage_title_descriprion">
                        <h1>Be Prepared To <br /> Comprehend The True Being</h1>
                    </div>
                    <div className="firstPage_title_scrollButton">
                        <button onClick={scrollDown}><span className="title__scrollButton">scroll down</span></button>
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