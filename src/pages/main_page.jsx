import Footer from "../components/pageTemplates/footer";
import HeaderMain from "../components/headers/header";
import '../css/main_page.css'
import SecondMainPage from "../components/pageTemplates/second_mainPage";
const MainPage = () =>{
    const scrollDown = () =>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    };
    const pagesContent = ([
        {id:1,title:"Determining Your level of awareness",topTitle:"Get Started",description: "Before starting classes, it is necessary to determine your level of preparedness for such a difficult path of cognition and awareness. To do this, you should take a small test, which will determine your level. Are you ready to start your journey? ",img:"https://i.sunhome.ru/journal/253/meditaciya-i-zdorove.orig.jpg"},
        {id:2,title:"What level of  hiker are you?",topTitle:"The beginning",description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",img:"https://i.sunhome.ru/journal/253/meditaciya-i-zdorove.orig.jpg"},
        {id:3,title:"What level of  hiker are you?",topTitle:"Get Started",description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",img:"https://i.sunhome.ru/journal/253/meditaciya-i-zdorove.orig.jpg"}
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
                <SecondMainPage pagesContent={pagesContent[0]}/>
            </div>
            <div className="third_landing">
                <SecondMainPage pagesContent={pagesContent[1]}/>
            </div>
            <div className="fourth_landing">
                <SecondMainPage pagesContent={pagesContent[2]}/>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )   

}

export default MainPage;