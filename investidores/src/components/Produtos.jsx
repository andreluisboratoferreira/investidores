import './Produtos.css';

const produtos = [
  {
    id: 1,
    nome: 'Como começar no python',
    preço: 'R$20,00',
    imagem: 'https://exemplo.com',
    link: 'https://cakto.com'
  }
]

function Produtos() {
  return (
    <div className="produtos">
      <h1 className="produtos-title">Produtos</h1>
      <div className="produtos-vitrine">
        {Produtos.map((produto) => (
            <div className="card" key={produto.id}></div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;