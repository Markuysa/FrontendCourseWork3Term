
const PageRightAlign= ({page})=>{
    return (

        <div className="page-wrapper">
                    <div className="page-wrapper-content">
                        <div className="page-wrapper-content__numberImage">
                        </div>
                        <div className="page-wrapper-content__text">
                            <span className="text__header_top">{page.topTitle}</span>
                            <h2 className="text__header_title">{page.title}</h2>
                            <h3 className="text__header_description">{page.description}</h3>
                            <span className="text__header_readMore">read more</span>
                        </div>
                        <div className="page-wrapper-content__image">
                            {/* <img src = {page.img} alt="an image" />   */}
                        </div>
                </div>
        </div>
    );
}

export default PageRightAlign;