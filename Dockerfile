FROM openjdk:11

# Copy the WAR file to the Docker image
COPY build/libs/patient-portal-0.0.1-SNAPSHOT.war /patient-portal-0.0.1-SNAPSHOT.war


# Expose port 8080
EXPOSE 8080

# Start the Java application
CMD ["java", "-jar", "/patient-portal-0.0.1-SNAPSHOT.war"]
