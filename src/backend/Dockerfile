FROM node
RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
ENV ATLAS_URI mongodb+srv://admin:gunfer510@clustervolkan-y1wf8.mongodb.net/test?retryWrites=true&w=majority
COPY . .

RUN npm install
EXPOSE 5000

CMD [ "npm", "start" ]