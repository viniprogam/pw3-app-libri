import './App.css';

import CardBooks from './components/CardBooks';
import livro1 from './assets/livros/cavernas_aco.jpg';
import livro2 from './assets/livros/correntes_espaco.jpg';
import livro3 from './assets/livros/fundacao_imperio.jpg';

export default function App() {
  return(
    <div className='cards'>
      <CardBooks
        titulo='Caverna de aço'
        autor='Isaac Asimav'
        imagem={livro1}
      />
      <CardBooks
        titulo='As correntes do espaço'
        autor='Isaac Asimav'
        imagem={livro2}
      />
      <CardBooks
        titulo='Fundação e império'
        autor='Isaac Asimav'
        imagem={livro3}
      />
  </div>
  )
  
}