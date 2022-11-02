import '../css/meditation_card.css'
import img from "../img/meditation_image.png"
const Meditation = (title)=>{

    return(
        <div className="card_wrapper">
            <div className="card">
                <div className="card_image">
                    <img src={img} alt="" />
                </div>
                <div className="card_title">
                    <h2></h2>
                </div>
                <div className="fav_button">
                    
                </div>
            </div>
        </div>
    );
}
export default Meditation;