import Footer from "../components/footer";
import HeaderMain from "../components/header";
import '../css/main_page.css'
import SecondMainPage from "../components/second_mainPage";
const MainPage = () =>{
    const scrollDown = () =>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    };
    const pagesContent = ([
        {title:"What level of  hiker are you?",firstTitle:"Get Started",description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",img:"https://wallpapersgood.ru/wallpapers/main/201249/gorod-franciya-parizh-yejfeleva-dea67b8.jpg"},
        {title:"What level of  hiker are you?",firstTitle:"Get Started",description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",img:"https://wallpapersgood.ru/wallpapers/main/201249/gorod-franciya-parizh-yejfeleva-dea67b8.jpg"},
        {title:"What level of  hiker are you?",firstTitle:"Get Started",description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",img:"https://wallpapersgood.ru/wallpapers/main/201249/gorod-franciya-parizh-yejfeleva-dea67b8.jpg"}
    ]);
    return (
        <div className="main-wrapper">
            <div className="first_page">
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
            </div>
            <div className="second_landing">
                <SecondMainPage pagesContent={pagesContent}/>
            </div>
            <div className="third_landing">
                <h1>Coming soon...</h1>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )   

}

export default MainPage;