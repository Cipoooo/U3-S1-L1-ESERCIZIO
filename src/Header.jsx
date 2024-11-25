const Header = props =>{
    return(
        <>
        <div className="headerContainer">
            <div className="divTitoli">
              <h1>{props.titolo}</h1>
            <hr />
            <h3>{props.sottotitolo}</h3>  
            </div>
            <div className="divImage">
                <img src="https://cdn.pixabay.com/photo/2024/11/22/10/03/canyon-9215914_1280.jpg" alt="image" width={props.imageW} height={props.imageH} />
                <p>{props.imageP}</p>
            </div>
        </div>
        </>
    );
}
export default Header