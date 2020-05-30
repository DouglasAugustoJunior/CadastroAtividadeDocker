# Baseado em node na última versão
FROM node:latest
# Autor
LABEL Douglas Augusto Junior
# Pasta que vai pegar os arquivos e pasta destino
COPY . /database-aplicacao
# Diretório que ele vai trabalhar, onde vai rodar o start
WORKDIR /database-aplicacao
# Comando inicial para instalar dependências
RUN npm install
# Comando para inciar o serviço
ENTRYPOINT [ "npm","start" ]
# Porta que vai usar
EXPOSE 3000
# RUN npm run build --prod para angular