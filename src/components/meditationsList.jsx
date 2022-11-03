import '../css/meditations_list.css'
import Meditation from "./meditation_card";
const MeditationsList= ({meditations})=>{
    console.log(meditations);
    return (
        <div className="meditations_list_content">
            <div className="meditations_list_conten_item">
                {
                    meditations.map( (meditation)=>
                        <Meditation meditation = {meditation} key={meditation.id} />
                    )
                }              
            </div>
        </div>

    );



};

export default MeditationsList;