import './App.css';
import Button from './Ese base Components/ButtonComponent.jsx'
import ImageComponent from './Ese base Components/ImageComponent.jsx';
import NavbarComponent from './NavbarComponent.jsx';
import Header from './Header.jsx';
function App() {
  return(
    <>
    {/*<ImageComponent src='https://cdn.pixabay.com/photo/2024/11/22/10/03/canyon-9215914_1280.jpg' alt='Funziona' />
    <Button name='bottone' />*/}
    <NavbarComponent href='#' linkText='spongeob' imageLink='https://cdn.pixabay.com/photo/2024/11/22/10/03/canyon-9215914_1280.jpg' imageAlt='immagine' />
    <Header titolo='Questo è un esempio di titolo' sottotitolo='Questo è un sottotitolo' imageW = '60px' imageH = '60px'  imageP = 'Questa è un immagine'/>
    </>
  )
}
export default App;
