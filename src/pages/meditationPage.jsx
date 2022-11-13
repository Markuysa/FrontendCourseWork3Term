import { useEffect } from "react";
import HeaderSecondary from "../components/headers/headerSecondary";
import MeditationPageSlider from "../components/meditationComponents/meditationPageSlider";
import Footer from "../components/pageTemplates/footer";
import ModalVideo from "../components/pageTemplates/modalVideo";

import "../css/meditationPageStyles.css"
import Button from "../UI/Blackbutton/BlackButton";
import WhiteButton from "../UI/WhiteButton/WhiteButton";
    const MeditationPage = ()=>{
        let modalReadMore
        useEffect(()=>{
            modalReadMore = document.querySelector(".meditation_additionalInfo_modalWindow")
        })  
        const readMore = ()=>{
            modalReadMore.style.visibility ="visible";
            modalReadMore.style.opacity ="1";

        }
        const hideReadMore = ()=>{

            modalReadMore.style.visibility ="collapse";
            modalReadMore.style.opacity ="0";

        }
        return(
            // <MeditationPageSlider />
            <div className="meditationPage-wrapper">
                <HeaderSecondary />
                <div className="meditationPage-wrapper__content">
                    <div className="content__meditation_block">
                        <div className="meditation_block__imageSwiper">
                            
                            <img src="https://media.kg-portal.ru/images/joker/joker_5.jpg" alt="" />

                        </div>
                        <div className="meditation_block__textContent">
                            
                            <div className="textContent__title">
                                <h1>MEDITATIONS AFTER STRESS</h1>
                                <div className="textContent__categories">
                                    <h2>Category: to relax </h2>
                                </div>
                            </div>  
                            <div className="textContent__description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
                                Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
                                </p>
                            </div>
                            <div className="textContent__buttons">
                                {/* <WhiteButton>Start</WhiteButton> */}
                                <ModalVideo />
                                <WhiteButton>Add to favorite</WhiteButton>
                            </div>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo">
                        <div className="meditation_additionalInfo__text">
                            <p className="additionalInfo_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                                Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                            </p>
                            {/* <p className="additionalInfo_readMore"></p> */}
                        </div>
                        <div className="meditation_additionalnfo__iconsBlock">
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/external-outline-juicy-fish/512/external-stress-crisis-management-outline-outline-juicy-fish.png" alt="" />
                                <p>Stress</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/nightmare.png" alt="" />
                                <p>Nightmares</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/skull-heart--v2.png" alt="" />
                                <p>Health issues</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/family.png" alt="" />
                                <p>Problems with family</p>
                            </div>
                        </div>
                        <div className="hiddenMeditationMore">
                            <WhiteButton onClick = {readMore}>Read More</WhiteButton>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo_modalWindow">
                        <div className="closeButton" onClick={hideReadMore}>

                        </div>
                        <div className="modalMeditationWrapper">
                            <div className="meditation_additionalInfo__text">
                                <p className="additionalInfo_content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                                    Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                                </p>
                                {/* <p className="additionalInfo_readMore"></p> */}
                            </div>
                            <div className="meditation_additionalnfo__iconsBlock">
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/external-outline-juicy-fish/512/external-stress-crisis-management-outline-outline-juicy-fish.png" alt="" />
                                    <p>Stress</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/nightmare.png" alt="" />
                                    <p>Nightmares</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/skull-heart--v2.png" alt="" />
                                    <p>Health issues</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/family.png" alt="" />
                                    <p>Problems with family</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="meditatoin_otherProducts">
                        

                    </div> */}
                    
                    <Footer />
                </div>
            </div>
        );
        
    }

    export default MeditationPage