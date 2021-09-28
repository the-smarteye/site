# Comandos Básicos no Git

- Clonar repositório remoto, via HTTPS, para local

  - `git clone link_repositorio.git`

- Adicionar arquivos para comitar
  - No Git **versão 2.x**:

|   **Comando**   | **Novos** | **Modificados** | **Removidos** | **Explicação**                                                        |
| :-------------: | :-------: | :-------------: | :-----------: | --------------------------------------------------------------------- |
| `git add --all` |     X     |        X        |       X       | Coloca todos arquivos (novos, modificados e removidos) no index/stage |
|   `git add .`   |     X     |        X        |       X       | Coloca todos arquivos (novos, modificados e removidos) no index/stage |
|  `git add -u`   |     -     |        X        |       X       | Coloca no Stage apenas arquivos modificados e removidos               |

- Comitar arquivo(s)

  - `git commit`
  - `git commit -m "mensagem"`

- Enviar arquivo(s) para o repositório remoto

  - `git push` (quando a branch já está linkada com o repositório remoto)
  - `git push --set-upstream origin nome_branch` (linkando a branch a seu respectivo remoto)

- Como contribuir no projeto:

1. Faça um fork desse projeto.
2. Crie uma nova branch para trabalhar: `git checkout -b my-feature`
3. Faça commit da sua feature: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
5. Solicite uma Pull Request para o diretório original.
