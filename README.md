# Autoescola União Sevilha

Site institucional da Autoescola União Sevilha, centro de formação de condutores localizado no bairro Sevilha (2ª Seção), em Ribeirão das Neves, Minas Gerais.

**Acesse:** [icarobrandaodev.github.io/autoescola_uniao](https://icarobrandaodev.github.io/autoescola_uniao/)

> Projeto em fase de protótipo. Parte do conteúdo, como os depoimentos, ainda é ilustrativa e será substituída por material real.

## Sobre o projeto

Landing page de página única criada para apresentar os serviços da autoescola, responder as dúvidas mais comuns sobre o processo de habilitação e levar o visitante até o atendimento pelo WhatsApp.

O foco é conversão e presença em buscas locais. Todo o conteúdo foi escrito para quem procura CNH em Ribeirão das Neves, e as respostas do FAQ seguem as regras da Resolução Contran nº 1.020/2025, em vigor desde 2026.

## Seções

| Seção | Âncora | Conteúdo |
|---|---|---|
| Início | `#hero` | Apresentação e chamada para o WhatsApp |
| Serviços | `#servicos` | 1ª habilitação, adição de categoria, treinamento para habilitados e renovação |
| Perguntas Frequentes | `#faq` | Doze perguntas sobre documentos, etapas, exames, aulas e prazos |
| Alunos Aprovados | `#aprovados` | Depoimentos de alunos |
| Onde Estamos | `#onde-estamos` | Fotos da fachada, mapa e rota até a unidade |

## Tecnologias

O site é feito sem framework e sem etapa de build, o que facilita a manutenção e mantém o carregamento leve.

- **HTML5** semântico, com a sanfona do FAQ construída sobre `<details>` nativo
- **CSS3** com variáveis customizadas para toda a paleta
- **JavaScript** puro, sem dependências
- **Google Fonts** com a família Plus Jakarta Sans
- **GitHub Actions** para publicação automática no GitHub Pages

## Estrutura de pastas

```
autoescola_uniao/
├── .github/
│   └── workflows/
│       └── static.yml        # publicação automática no GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css         # estilos e paleta de cores
│   ├── img/
│   │   ├── alunos/           # fotos de alunos aprovados
│   │   ├── fachada/          # fotos da unidade
│   │   └── logo/             # logo oficial
│   └── js/
│       └── main.js           # menu, WhatsApp, FAQ e ano do rodapé
└── index.html
```

## Como rodar localmente

Não há dependências para instalar. Basta clonar e abrir o `index.html` no navegador:

```bash
git clone https://github.com/icarobrandaodev/autoescola_uniao.git
cd autoescola_uniao
```

Para testar com um servidor local, que se aproxima mais do ambiente publicado:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação

Todo push na branch `main` dispara o workflow em `.github/workflows/static.yml`, que publica o site no GitHub Pages automaticamente. Também é possível rodar a publicação manualmente pela aba **Actions** do repositório.

## Manutenção

### Trocar o número do WhatsApp

O número fica centralizado em uma única constante no topo de `assets/js/main.js`:

```js
const WHATSAPP_NUMBER = '553136252542';
```

Alterando esse valor, todos os botões do site passam a usar o novo número. O formato é código do país, DDD e número, sem espaços ou símbolos.

### Mensagem de cada botão

Cada botão de WhatsApp tem uma mensagem própria, definida no atributo `data-wa-msg` do HTML. O script monta o link final somando o número e a mensagem:

```html
<a data-wa-msg="Olá! Quero informações sobre a 1ª habilitação.">...</a>
```

Isso permite saber de qual parte do site cada contato veio.

### Alterar cores

A paleta completa está declarada uma única vez, no bloco `:root` do início de `assets/css/style.css`. Nenhuma regra usa cor fixa diretamente, então qualquer ajuste feito ali se reflete no site inteiro.

| Variável | Cor | Uso |
|---|---|---|
| `--color-marca` | `#2E3192` | Azul da logo, usado em títulos e destaques |
| `--color-ancora` | `#1E2066` | Fundo do rodapé e da faixa final |
| `--color-acao` | `#228535` | Botões e elementos clicáveis |
| `--color-texto` | `#1A1B33` | Texto principal |

As cores foram extraídas da logo oficial e ajustadas para manter contraste acessível.

### Ano do rodapé

O ano do aviso de direitos autorais é preenchido automaticamente pelo `main.js`, então não precisa ser atualizado a cada virada de ano.

## SEO local

- Título e descrição com o nome da autoescola, o bairro e a cidade
- Dados estruturados em JSON-LD do tipo `DrivingSchool`, com endereço, telefone e horário
- Texto alternativo da logo com nome e localização
- Telefone clicável com `tel:` para ligação direta no celular

## Próximos passos

- [ ] Substituir os depoimentos ilustrativos por depoimentos reais, com autorização de imagem
- [ ] Confirmar se o número atual é o WhatsApp Business oficial da unidade
- [ ] Reduzir o peso da foto do aluno, que hoje tem cerca de 2 MB
- [ ] Remover a cópia da foto do aluno que ficou na raiz do repositório
- [ ] Remover a imagem duplicada `fachada3.jpeg`, idêntica à `fachada2.jpeg`
- [ ] Renomear arquivos com espaço no nome
- [ ] Criar páginas dedicadas para as categorias A e B

## Contato da autoescola

**Autoescola União Sevilha**
Rua Monte Carmelo, 394, Sevilha (2ª Seção)
Ribeirão das Neves, MG, CEP 33858-080
Telefone: (31) 3625-2542

Segunda a sexta, das 7h às 20h
Sábado, das 8h às 12h

## Autor

Desenvolvido por [Ícaro Brandão](https://github.com/icarobrandaodev).

## Direitos

A marca, a logo e as fotografias pertencem à Autoescola União Sevilha. O código foi desenvolvido para uso exclusivo da autoescola, e todos os direitos estão reservados.
