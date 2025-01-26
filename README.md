## Universidade
O projeto é um portal em construção voltado para estudos no curso de Ciência da Computação, inspirado no projeto Universidade Brasileira Livre (UBL)

Atualmente, temos disponível a grade curricular do curso da UBL

![image](https://github.com/user-attachments/assets/f668e7ed-f89c-4bfb-b7e7-5b90d9b8261f)

### Objetivos futuros
1. Canal de atividades para cada cadeira, onde pessoas podem contribuir enviando em arquivo .md
2. Criação de um fórum no site para dúvidas relacionadas a cada disciplina ou aula presente. Claro, contar com pessoas para responder também é um objetivo, rsrs.

### Aulas no Portal
![image](https://github.com/user-attachments/assets/a260f2fb-0e39-4281-8987-63b231a632e1)

1. Atualmente, o projeto oferece 2 cursos gratuitos, que podem ser acessados e assistidos diretamente no site, sem a necessidade de ir ao YouTube. Isso ajuda a evitar distrações e facilita o foco no conteúdo.

### Obs: 

O site não tem objetivo de cobrar nada para funcionar, estou usando ferramentas gratuitas de hospedagem e nenhum conteúdo presente é de minha propriedade, se trata de um projeto aberto

## Como contribuir?

```git
git checkout -b feature/adicionar-cursos-embutidos
```

Realize commits pequenos e com frequência. Isso ajuda a manter o histórico de mudanças limpo e fácil de entender. Cada commit deve ser uma unidade lógica de trabalho.

```git
git add .
git commit -m "Adiciona estrutura para exibir cursos com vídeos embutidos"
git push origin feature/adicionar-cursos-embutidos
````

As mensagens de commit devem ser descritivas e claras, explicando o que foi feito. A convenção recomendada é:
1. Primeira linha: Resumo curto do que foi feito (máximo 50 caracteres).
2. Linhas seguintes: Descrição detalhada, se necessário, explicando o motivo da mudança.

```git
git commit -m "Adiciona suporte a vídeos embutidos para os cursos"
```

Sempre que estiver trabalhando em uma branch e for fazer o git pull, utilize a opção --rebase para evitar merges desnecessários. Isso mantém o histórico linear e limpo.

```git
git pull --rebase origin master
```

Para adicionar os cursos do YouTube manualmente na plataforma, sem utilizar a API do YouTube, você pode configurar um processo para embutir os vídeos diretamente em sua aplicação. Vou te mostrar um exemplo básico de como isso poderia ser feito, além de algumas sugestões para organizar o código.

1. Estrutura para Adicionar Cursos Manualmente
Você pode criar um arquivo de dados ou estrutura para armazenar as informações dos cursos, como título, descrição, e o ID do vídeo do YouTube (para o embed). Vamos supor que você armazene isso em um arquivo de configuração no seu projeto, como um array de objetos.

2. Exemplo de Código
Aqui está um exemplo de como você pode adicionar os cursos manualmente no seu projeto:

```Typescript
  "2": {
    id: "2" <- Id do curso,
    title: "Nome Do curso",
    description: "Descrição do Curso",
    professor: {
      name: "Nome do Projeto",
      bio: "Professor de Matemática Discreta",
      imageUrl: "/douglasmaioli.jpg?height=200&width=200"
    },
    "videos": [
      {
        id: "1",
        title: "Aula #01 - Tabela Verdade dos Conectivos (Parte I de Lógica) | Fundamentos Matemáticos para Computação",
        videoId: "QE6ruiq632o",
        completed": false
      },
    ]
  }
```

No componente ```course-page``` adicione a playlist referente ao curso, prioridade aos cursos que tem linkado na UBL.


O projeto é em Next, tendo node instalado e clonado o projeto, você pode mandar o ```npm run dev``` e acessar a localhost:3000 que irá encontrar o projeto rodando em sua máquina

Referências
https://github.com/Universidade-Livre/ciencia-da-computacao
