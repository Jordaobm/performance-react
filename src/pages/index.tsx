import Link from "next/link";

function Home() {
  return (
    <div className="container">
      <h3>Página inicial</h3>
      <ul>
        <li>
          <Link href="/NotOtimized">Sem otimizações</Link>
        </li>
        <li>
          <Link href="/Otimized">Com otimizações</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
