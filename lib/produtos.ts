export type Cor = { nome: string; hex: string };

export type Produto = {
  slug: string;
  nome: string;
  categoria: string; // slug da categoria
  preco: number;
  precoAntigo: number;
  nota: number;
  avaliacoes: number;
  imagem: string | null; // null = ainda sem foto (mostra quadro cinza)
  cores: Cor[];
  tamanhos: string[];
  descricao: string;
  maisVendido: boolean;
};

export type Categoria = { slug: string; nome: string };

export const categorias: Categoria[] = [
  { slug: "camisetas", nome: "Camisetas" },
  { slug: "blusas", nome: "Blusas" },
  { slug: "jaquetas", nome: "Jaquetas" },
  { slug: "calcas", nome: "Calças" },
  { slug: "tenis", nome: "Tênis" },
  { slug: "acessorios", nome: "Acessórios" },
];

const TAM_ROUPA = ["P", "M", "G", "GG"];
const TAM_CALCA = ["38", "40", "42", "44", "46"];
const TAM_TENIS = ["39", "40", "41", "42", "43"];

const PRETO: Cor = { nome: "Preto", hex: "#111111" };
const GRAFITE: Cor = { nome: "Grafite", hex: "#4b5563" };
const BEGE: Cor = { nome: "Bege", hex: "#d6c3a5" };
const VERDE: Cor = { nome: "Verde militar", hex: "#4b5320" };

export const produtos: Produto[] = [
  // ---- os 4 mais vendidos (mesmos dados de antes) ----
  {
    slug: "moletom-essencial",
    nome: "Moletom Essencial",
    categoria: "blusas",
    preco: 199.9,
    precoAntigo: 249.9,
    nota: 4.8,
    avaliacoes: 124,
    imagem: "/produtos/moletom.jpg",
    cores: [PRETO, { nome: "Cinza", hex: "#9ca3af" }, GRAFITE],
    tamanhos: TAM_ROUPA,
    descricao:
      "Moletom macio e confortável, com caimento perfeito para o dia a dia. Combina com tudo.",
    maisVendido: true,
  },
  {
    slug: "camisa-oversized",
    nome: "Camisa Oversized",
    categoria: "camisetas",
    preco: 149.9,
    precoAntigo: 199.9,
    nota: 4.7,
    avaliacoes: 98,
    imagem: "/produtos/camisa.jpg",
    cores: [BEGE, { nome: "Off-white", hex: "#f1ece2" }, PRETO],
    tamanhos: TAM_ROUPA,
    descricao:
      "Modelagem oversized em tecido leve, para um visual solto e moderno.",
    maisVendido: true,
  },
  {
    slug: "jaqueta-puffer",
    nome: "Jaqueta Puffer",
    categoria: "jaquetas",
    preco: 399.9,
    precoAntigo: 549.9,
    nota: 4.9,
    avaliacoes: 76,
    imagem: "/produtos/puffer.jpg",
    cores: [PRETO, VERDE, GRAFITE],
    tamanhos: TAM_ROUPA,
    descricao:
      "Jaqueta acolchoada que esquenta sem pesar. Ideal para os dias frios.",
    maisVendido: true,
  },
  {
    slug: "calca-cargo",
    nome: "Calça Cargo",
    categoria: "calcas",
    preco: 189.9,
    precoAntigo: 249.9,
    nota: 4.6,
    avaliacoes: 62,
    imagem: "/produtos/cargo.jpg",
    cores: [PRETO, VERDE, BEGE],
    tamanhos: TAM_CALCA,
    descricao:
      "Calça cargo com bolsos laterais e corte reto, resistente e muito versátil.",
    maisVendido: true,
  },

  // ---- produtos de exemplo (ainda sem foto) ----
  {
    slug: "camiseta-basica-premium",
    nome: "Camiseta Básica Premium",
    categoria: "camisetas",
    preco: 79.9,
    precoAntigo: 109.9,
    nota: 4.7,
    avaliacoes: 211,
    imagem: null,
    cores: [{ nome: "Branco", hex: "#ffffff" }, PRETO, { nome: "Marinho", hex: "#1e3a5f" }],
    tamanhos: TAM_ROUPA,
    descricao: "Algodão de alta gramatura, toque macio e que não perde a forma.",
    maisVendido: false,
  },
  {
    slug: "camiseta-polo-piquet",
    nome: "Camiseta Polo Piquet",
    categoria: "camisetas",
    preco: 119.9,
    precoAntigo: 159.9,
    nota: 4.5,
    avaliacoes: 54,
    imagem: null,
    cores: [{ nome: "Marinho", hex: "#1e3a5f" }, { nome: "Branco", hex: "#ffffff" }, VERDE],
    tamanhos: TAM_ROUPA,
    descricao: "Polo clássica em malha piquet, elegante sem perder o conforto.",
    maisVendido: false,
  },
  {
    slug: "sueter-trico",
    nome: "Suéter de Tricô",
    categoria: "blusas",
    preco: 169.9,
    precoAntigo: 229.9,
    nota: 4.8,
    avaliacoes: 37,
    imagem: null,
    cores: [GRAFITE, BEGE, { nome: "Marinho", hex: "#1e3a5f" }],
    tamanhos: TAM_ROUPA,
    descricao: "Tricô fino e quentinho, perfeito para compor looks em camadas.",
    maisVendido: false,
  },
  {
    slug: "jaqueta-jeans",
    nome: "Jaqueta Jeans",
    categoria: "jaquetas",
    preco: 259.9,
    precoAntigo: 339.9,
    nota: 4.6,
    avaliacoes: 45,
    imagem: null,
    cores: [{ nome: "Azul médio", hex: "#4a6fa5" }, PRETO],
    tamanhos: TAM_ROUPA,
    descricao: "Clássico atemporal em jeans resistente, com lavagem uniforme.",
    maisVendido: false,
  },
  {
    slug: "calca-jeans-slim",
    nome: "Calça Jeans Slim",
    categoria: "calcas",
    preco: 179.9,
    precoAntigo: 239.9,
    nota: 4.7,
    avaliacoes: 88,
    imagem: null,
    cores: [{ nome: "Azul escuro", hex: "#1f2f4d" }, PRETO],
    tamanhos: TAM_CALCA,
    descricao: "Corte slim com elastano, acompanha o movimento do corpo.",
    maisVendido: false,
  },
  {
    slug: "calca-alfaiataria",
    nome: "Calça de Alfaiataria",
    categoria: "calcas",
    preco: 219.9,
    precoAntigo: 289.9,
    nota: 4.5,
    avaliacoes: 29,
    imagem: null,
    cores: [PRETO, GRAFITE, BEGE],
    tamanhos: TAM_CALCA,
    descricao: "Alfaiataria moderna, do trabalho ao fim de semana.",
    maisVendido: false,
  },
  {
    slug: "tenis-branco-minimal",
    nome: "Tênis Branco Minimal",
    categoria: "tenis",
    preco: 229.9,
    precoAntigo: 299.9,
    nota: 4.9,
    avaliacoes: 143,
    imagem: null,
    cores: [{ nome: "Branco", hex: "#ffffff" }, PRETO],
    tamanhos: TAM_TENIS,
    descricao: "Tênis liso em couro sintético, o par que combina com qualquer look.",
    maisVendido: false,
  },
  {
    slug: "tenis-urban-runner",
    nome: "Tênis Urban Runner",
    categoria: "tenis",
    preco: 249.9,
    precoAntigo: 329.9,
    nota: 4.6,
    avaliacoes: 67,
    imagem: null,
    cores: [GRAFITE, { nome: "Cinza", hex: "#9ca3af" }, PRETO],
    tamanhos: TAM_TENIS,
    descricao: "Solado macio e visual esportivo para o uso na cidade.",
    maisVendido: false,
  },
  {
    slug: "bone-dad-hat",
    nome: "Boné Dad Hat",
    categoria: "acessorios",
    preco: 59.9,
    precoAntigo: 79.9,
    nota: 4.4,
    avaliacoes: 41,
    imagem: null,
    cores: [PRETO, BEGE, VERDE],
    tamanhos: ["Único"],
    descricao: "Aba curva e regulagem ajustável, vai bem com qualquer estilo.",
    maisVendido: false,
  },
  {
    slug: "cinto-couro-classico",
    nome: "Cinto de Couro Clássico",
    categoria: "acessorios",
    preco: 89.9,
    precoAntigo: 129.9,
    nota: 4.7,
    avaliacoes: 52,
    imagem: null,
    cores: [PRETO, { nome: "Marrom", hex: "#5b3a29" }],
    tamanhos: ["90", "95", "100", "105"],
    descricao: "Couro legítimo com fivela discreta, acabamento refinado.",
    maisVendido: false,
  },
];

// ---------- funções de busca (depois trocam por consulta ao Supabase) ----------

export const reais = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const descontoPercentual = (p: Produto) =>
  Math.round((1 - p.preco / p.precoAntigo) * 100);

export const getMaisVendidos = () => produtos.filter((p) => p.maisVendido);

export const getProdutosPorCategoria = (slug: string) =>
  produtos.filter((p) => p.categoria === slug);

export const getProduto = (slug: string) =>
  produtos.find((p) => p.slug === slug);

export const getCategoria = (slug: string) =>
  categorias.find((c) => c.slug === slug);