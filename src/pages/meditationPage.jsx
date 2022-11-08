import HeaderSecondary from "../components/headers/headerSecondary";
import MeditationPageSlider from "../components/meditationComponents/meditationPageSlider";
import Footer from "../components/pageTemplates/footer";


import "../css/meditationPageStyles.css"
import Button from "../UI/Blackbutton/BlackButton";
import WhiteButton from "../UI/WhiteButton/WhiteButton";


    const MeditationPage = ()=>{
        return(
            // <MeditationPageSlider />
            <div className="meditationPage-wrapper">
                <HeaderSecondary />
                <div className="meditationPage-wrapper__content">
                    <div className="content__meditation_block">
                        <div className="meditation_block__imageSwiper">


                        </div>
                        <div className="meditation_block__textContent">
                            
                            <div className="textContent__title">
                                <h1>MEDITATIONS AFTER STRESS</h1>
                                <div className="textContent__categories">
                                    <h2>Category: for relax </h2>
                                </div>
                            </div>  
                            <div className="textContent__description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
                                Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
                                Et nulla sit convallis orci est, fames sit luctus lacus. 
                                </p>
                            </div>
                            <div className="textContent__buttons">
                                <WhiteButton>Start</WhiteButton>
                                <WhiteButton>Add to favorite</WhiteButton>
                                
                            </div>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo">

                    </div>

                    <div className="meditatoin_otherProducts">


                    </div>
                    <Footer />
                </div>



            </div>
        );
        
    }

    export default MeditationPage