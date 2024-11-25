const NavbarComponent = props => {
    return(
      <>
      <nav className="nav">
        <img src={props.imageLink} alt={props.imageAlt} />
        <div>
            <ul>
                <li><a href={props.href}>{props.linkText}</a></li>
                <li><a href={props.href}>{props.linkText}</a></li>
                <li><a href={props.href}>{props.linkText}</a></li>
                <li><a href={props.href}>{props.linkText}</a></li>
                <li><a href={props.href}>{props.linkText}</a></li>
            </ul>
        </div>
      </nav>
      </>
    );
}
export default NavbarComponent;