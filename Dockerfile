FROM node:12 AS builder

WORKDIR /workspace
COPY . /workspace

RUN yarn install
RUN yarn build

FROM node:12 AS server

WORKDIR /workspace
COPY --from=builder /workspace/dist /workspace/dist
COPY --from=builder /workspace/node_modules /workspace/node_modules

CMD ["node", "dist/main.js"]
EXPOSE $PORT
