FROM public.ecr.aws/lambda/nodejs:18

WORKDIR ${LAMBDA_TASK_ROOT}

COPY package*.json ./
COPY prisma ./prisma

RUN npm install --omit=dev

RUN npx prisma generate --no-engine

COPY index.mjs ./
COPY emails ./emails

CMD ["index.handler"]

#docker buildx build --platform linux/amd64 -t stockmails-lambda . --load
#docker tag stockmails-lambda:latest <id>.dkr.ecr.us-east-1.amazonaws.com/stockmails-lambda:latest
#docker push <id>.dkr.ecr.us-east-1.amazonaws.com/stockmails-lambda:latest
