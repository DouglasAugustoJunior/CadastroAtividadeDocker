# Baseado em node na última versão
FROM node:latest as node
# Autor
LABEL Douglas Augusto Junior
# Pasta que vai pegar os arquivos e pasta destino
COPY . /front-aplicacao
# Diretório que ele vai trabalhar, onde vai rodar o start
WORKDIR /front-aplicacao
# Comando inicial para instalar dependências
RUN npm install
RUN npm run build --prod

# Baseado no nginx
FROM nginx
COPY --from=node /front-aplicacao/dist/front-aplicacao /usr/share/nginx/html