# Projeto Vite

Este projeto utiliza Vite para um desenvolvimento rápido e eficiente, oferecendo um ambiente de desenvolvimento moderno com suporte a recursos como módulos ES, Hot Module Replacement (HMR) e muito mais.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- Node.js (Preferencialmente a versão mais recente LTS)
- Yarn ou npm (Gerenciadores de pacotes para o JavaScript)

## Como começar

Para obter o projeto e instalar suas dependências, siga os passos abaixo:

### Clonar o projeto

```git clone <URL_DO_REPOSITORIO>```

### Navegar para o diretório do projeto

```cd aula20/vite-project```


### Instalar dependências

Com Yarn:
```yarn```

Ou, se preferir usar npm:
```npm i```

### Executar o projeto

Com yarn:
```yarn dev```

Com npm:
```npm run dev```

Isso iniciará o servidor de desenvolvimento do Vite e permitirá que você visualize o projeto no navegador.

## Configurando a API com json-server

Este projeto utiliza `json-server` para simular uma API RESTful usando um arquivo `db.json`. Para iniciar a API, abra um novo terminal e siga os passos:

### Navegar para o diretório do projeto (se necessário)

```cd aula20/vite-project```


### Iniciar o json-server

```npx json-server db.json --watch```


Isso iniciará o servidor da API na porta padrão `3000`. Certifique-se de que a porta `3000` está disponível ou configure uma porta diferente conforme necessário.

## Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia o guia de contribuição para saber como ajudar a melhorar este projeto.

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Boa codificação!
