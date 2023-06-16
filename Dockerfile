FROM maven:3.8.5-openjdk-17 as build
WORKDIR /
COPY /src /src
COPY pom.xml /
RUN mvn -f /pom.xml clean package

FROM node:12
RUN ["mkdir", "front"]
WORKDIR /front
COPY package.json* /front/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM openjdk:17-jdk-slim
RUN ["mkdir", "src"]
WORKDIR /src
COPY /src /src
COPY --from=build /target/*.jar application.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "application.jar"]