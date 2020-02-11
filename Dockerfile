FROM testcafe/testcafe

USER root

RUN mkdir /home/e2e
WORKDIR /home/e2e
COPY . .
RUN chmod -R 757 /home/e2e

USER user

RUN npm install

EXPOSE 1337 1338