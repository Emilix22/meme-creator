import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [image, setImage] = useState();

  const onChangeLine1 = (event) => {
    setLine1(event.target.value)
  }

  const onChangeLine2 = (event) => {
    setLine2(event.target.value)
  }

  const onChangeImage = (event) => {
    setImage(event.target.value)
  }

  const onClickExport = (event) => {
    html2canvas(document.querySelector("#memeContainer")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App"> 
      <select onChange={onChangeImage}>
      <option value=''>Elige una imagen...</option>
        <option value='fire.jpg'>Casa en llamas</option>
        <option value='futurama.jpg'>Futurama</option>
        <option value='history.jpg'>History</option>
        <option value='smart.jpg'>Pensar</option>
      </select> <br/>

      <input onChange={onChangeLine1} type='text' placeholder='linea 1'/><br/>
      <input onChange={onChangeLine2} type='text' placeholder='linea 2'/><br/> 

      <button onClick={onClickExport}>Exportar</button>

      <div className='memeContainer' id='memeContainer'>
        <span className='line1'>{line1}</span><br/>
        <span className='line2'>{line2}</span>
        <img src= {`/img/${image}`} alt='Imagen-Meme' />
      </div>
      
    </div>
  );
}

export default App;
