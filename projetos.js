/* Lista de imóveis do portfólio. Para incluir um imóvel novo, acrescente um bloco
   no INÍCIO da lista (o mais recente aparece primeiro) e coloque os vídeos em
   videos/<pasta>/ com os nomes: final.mp4 (+ .jpg), drone1..N.mp4, cel1..N.mp4 (+ .jpg). */
window.PROJETOS = [
  {
    slug: "exclusive-3-quartos",
    pasta: "exclusive-3q",
    nome: "Residencial Exclusive · 3 quartos",
    local: "Centro · Canelinha/SC",
    resumo: "Casa pronta no Centro de Canelinha/SC. Gravação com drone e celular em uma manhã, e edição completa para divulgação nas redes.",
    ficha: [["Área construída", "100 m²"], ["Terreno", "180 m²"], ["Quartos", "3 · 1 suíte"]],
    destaques: [
      "Abertura aérea e final com a localização do imóvel",
      "Todos os quartos, a suíte, a cozinha e a área gourmet",
      "Cortes no ritmo da música, cor neutra e natural",
      "Informações do imóvel em textos animados"
    ],
    versoes: [
      { nome: "Versão 1", arquivo: "final" },
      { nome: "Versão 2", arquivo: "final_v4" }
    ],
    drone: 9,
    internas: 18
  }
];
