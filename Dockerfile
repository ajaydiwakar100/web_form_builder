FROM ubuntu:24.04

ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install pre-reqs
RUN apt update && \
    apt -y install curl;
    
# Install NODE AND RELATED THINGS
RUN curl -sL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh && \
	bash nodesource_setup.sh && \
	apt install -y nodejs && \
	npm install nodemon -g;


# Add this line to install pm2 globally
RUN npm install -g yarn && \
    npm install -g tailwindcss && \
    npm install -g pm2;


WORKDIR /var/www/clientapp


EXPOSE 3000

# Replace CMD/ENTRYPOINT with pm2 runtime
# ENTRYPOINT ["/bin/bash"]

# CMD ["yarn", "dev:rest"]
CMD ["pm2-runtime", "start", "pm2.config.js"]
