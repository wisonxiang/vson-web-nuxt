FROM node:24-alpine

WORKDIR /app

RUN npm install -g pm2 --registry https://registry.npmmirror.com/

COPY ecosystem.config.cjs ./

COPY .output ./.output

EXPOSE 3005

CMD [ "pm2-runtime", "ecosystem.config.cjs" ]