From mongo-express:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /user/src/app

# Install app dependencies
COPY package.json /user/src/app
RUN npm install

# Bundle app source
COPY . /user/src/app

#EXPOSE 3000（3000可以改为你为App设置的Port口）
EXPOSE 3000     
CMD ["npm","start"]