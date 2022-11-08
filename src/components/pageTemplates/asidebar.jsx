import "../../css/asideBar.css"

const AsideBar = ({items})=>{
    console.log(items)
    let listItem = document.querySelectorAll(".asideBarItem");
    for (let i=0;i<listItem.length;i++){
        listItem[i].onClick = ()=>{
            let j = 0;
            while (j<listItem.length){
                listItem[j++].className = 'asideBarItem'
            }
            listItem[i].classList.add("active")
            alert(listItem[i].classList)
        }
    }
    return (
        <div className="asideBarItems">
            <ul>
                {/* // items.map(item=>{
                //     <li className="asideBarItem">{item.title}</li>
                // })    */}
                <li className="asideBarItem"  >To sleep</li>
                <li className="asideBarItem" >To study</li>
                <li className="asideBarItem" >To relax</li>
            </ul>
        </div>
    );
    

}


export default AsideBar;