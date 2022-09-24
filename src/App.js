import logo from './logo.svg';
import './App.css';
import FullName from './Components/Profile/FullName';
import { Bio } from './Components/Profile/Bio';
import Profession from './Components/Profile/Profession';
import Image from './Components/Profile/Image';


function App() {
  function HandleName(e){
    e.preventDefault();
    alert("Walid Boulima");
  }
  Bio.defaultProps = {
    bio: "not student"
   };
   const styleObject = {color:"blue",textalign:"center"}
  return (
    <div className="App" style={styleObject}>
    <Image><img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000" style={{height:150}}/></Image>
   <FullName name="Boulima Walid" function={HandleName}/>
   <Bio bio="student"/>
   <Profession prof="Software Engineer" />
   </div>
   
  );
}

export default App;
