
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY PlacesService.java /app/PlacesService.java
RUN javac PlacesService.java
ENV PORT=8080
EXPOSE 8080
CMD ["sh", "-c", "java PlacesService"]
