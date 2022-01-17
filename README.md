<div align="center">
  <img alt="ReactJS" title="ReactJS" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/baixados.png" width="300px" />
</div>

<h1>📈Performance</h1>

<h2 id="start">📙Sumário</h2>

<ul>
  <li><a href="#sobre">Sobre o repositório</a></li>
  <li><a href="#renderizacoes">Renderizações... quando ocorre uma nova renderização?</a></li>
  <li><a href="#fluxo">Fluxo de renderização</a>
  <li><a href="#funcoes">Funções que podem nos ajudar</a> 
    <ul>
      <li><a href="#memo">Memo</a></li>
      <li><a href="#whenToUseMemo">Quando utilizar o memo?</a></li>
      <li><a href="#useMemo">useMemo</a></li>
      <li><a href="#useCallback">useCallback</a></li>
      <li><a href="#formatData">Formatação de dados</a></li>
      <li><a href="#codeSplitting">Code Splitting</a></li>
      <li><a href="#listVirtualized">Virtualização de Listas</a></li>
  </ul>
  <li><a href="#results">Resultados</a> 
    
</ul>

<h2 id="sobre">💡 Sobre o repositório</h2>
Esse repositório tem como objetivo apenas entender e agrupar um conhecimento adquirido durante um módulo muito interessante do bootcamp ignite da <a href="https://app.rocketseat.com.br/node/performando-apps-com-react-js">Rocketseat 🚀</a>. O módulo fala sobre performance no React e como devemos tratar problemas de performance na aplicação e na prevenção desses problemas... abaixo segue o conteúdo estudado durante o módulo.

<h2 id="renderizacoes">🖥️ Renderizações... quando ocorre uma nova renderização?</h2>

- Quando o componente pai renderiza... seus componentes filhos também renderizam junto (Componente pai para filho).
- Propriedade.
Caso o componente filho receba uma propriedade e ela for alterada... ocorrerá uma nova renderização.
- Hooks.
Atualizações de estado no componente ocasionam em uma nova renderização.

<h2 id="fluxo">💻 Fluxo de renderização</h2>

 1. Gerar uma nova versão do componente que precisa ser renderizado;
 2. Comparar a nova versão do componente com a versão anterior já salva na página;
 3. Se houverem alterações... então o React “renderiza” essa nova versão em tela

<h4>⚠️ Atenção</h4>
Quando o componente pai altera um valor de estado e causa uma nova renderização... o React analisa se os dados dos componentes filhos mudaram... esses componentes “ainda” não renderizaram do zero... eles foram comparados com seu estado anterior... se mudou... ai sim o react renderiza eles novamente... se não mudou, não ocorre a nova renderização daquele componente filho.

<div align="center">
  <img alt="1" title="1" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/1.png" width="1000px" />
</div>

<h2 id="funcoes">🙋 Funções que podem nos ajudar</h2>
<h3 id="memo">Memo</h3>
Utilizando a função memo dentro do componente Item da listagem passamos a verificar se a propriedade que ele recebe mudou... caso não tenha mudado o react nem executa o primeiro passo do fluxo de renderização (1. Gerar uma nova versão do componente que precisa ser renderizado)

<div align="center">
  <img alt="2" title="2" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/2.png" width="1000px" />
</div>

<div align="center">
  <img alt="3" title="3" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/3.png" width="1000px" />
</div>

Veja que quando altero novamente o valor do input, o componente não renderiza novamente... pois eu disse ao memo que verificasse se a propriedade item alterou... e como não alterou... não sofreu nova renderização...

<div align="center">
  <img alt="4" title="4" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/4.png" width="1000px" />
</div>

<h3 id="whenToUseMemo">Quando utilizar o memo?</h3>
❌ Não utilizar de forma prematura e desnecessária.

- Utilizamos memo em componentes que são **puros**.... (somente áreas visuais). Funções puras são funções que dados os mesmos parâmentros, sempre retornam o mesmo valor.
- Em componentes que renderizam demais...
- Quando o componente renderiza novamente com as mesmas propriedades...
- Memo faz sentido em componentes médios e grandes (componentes muito pequenos e simples não trazem ganhos respeitáveis se utilizados com o memo)


<h3 id="useMemo">useMemo</h3>

- Cálculos pesados

<div align="center">
  <img alt="5" title="5" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/5.png" width="1000px" />
</div>

- Igualdade referencial (quando a gente repassa aquela informação à um componente filho)

⚠️ É importante sempre que tivermos algo externo sendo utilizado dentro do useMemo, colocar isso dentro do array de dependências.

<h3 id="useCallback">useCallback</h3>

- Usamos para memorizar funções que geralmente são passadas para componentes filhos.

⚠️ É importante sempre que tivermos algo externo sendo utilizado dentro do useCallback, colocar isso dentro do array de dependências

<h3 id="formatData">Formatação de dados</h3>
Para evitar cálculos desnecessários em renderização, fazer sempre esses cálculos e formatações dentro das funções que só executam mediante a ação necessária... (no nosso caso, na requisição feita quando buscamos os itens)

<h3 id="codeSplitting">Code Splittings</h3>
Dividindo o código... 

Para componentes que nem sempre serão visiveis ao usuário e que dependem de um caso de ação do usuário muito específico para ser renderizado, podemos utilizar, do react a função **lazy** que traz o funcionamento de “carregamento preguiçoso”... ou então, **dynamic**, do next... 

Essa função faz com que o nosso componente seja importado somente no momento da renderização...

<div align="center">
  <img alt="6" title="6" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/6.png" width="1000px" />
</div>

<div align="center">
  <img alt="7" title="7" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/7.png" width="1000px" />
</div>

<h3 id="listVirtualized">Virtualização de Listas</h3>
Listas virtualizadas servem para, caso tenhamos uma listagem muito grande em uma página, os itens somente serão renderizados se o usuário precisar vê-los.

<div align="center">
  <img alt="8" title="8" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/8.png" width="1000px" />
</div>

<h3 id="results">Resultados</h3>
Quando fazemos uma comparação de performance entre uma tela construída sem a aplicação de alguns conceitos de otimização e uma tela construída utilizando dos métodos abordados no módulo, podemos perceber sim uma pequena diferença entre o tempo de renderização dos componentes e quantas vezes eles são atualizados em tela. 

Por se tratar de uma aplicação simples e de testes apenas, a diferença fica na casa dos milésimos de segundos... porém, quando aplicado no lugar certo esses conceitos de performance podem fazer a diferença entre um site totalmente reativo e um site lento cheio de problemas estruturais.


<div align="center">
  <img alt="9" title="9" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/9.png" width="1000px" />
</div>


<div align="center">
  <img alt="10" title="10" src="https://github.com/Jordaobm/performance-react/blob/master/public/documentation/10.png" width="1000px" />
</div>


