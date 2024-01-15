# Use the Nginx image as the base image
FROM nginx:latest

# Use the official Node.js image as the base image
FROM node:20

# Copy the built Angular app to the appropriate location in the container
COPY dist/project-portfolio /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
