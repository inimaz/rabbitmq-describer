# node base image
FROM node:16
# Install dependencies
COPY package*.json ./
# Install
RUN npm install --production
# Copy source code to image
COPY . .
# Expose port for service
EXPOSE 3030
CMD ["node", "./src/"]