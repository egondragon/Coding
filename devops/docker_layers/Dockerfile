FROM docker.io/debian:bullseye-slim
RUN apt update -qq
RUN apt install -qq -y wget
RUN apt clean
RUN rm -rf /var/lib/apt/lists/*
RUN wget http://xcal1.vodafone.co.uk/10MB.zip
RUN rm -rf 10MB.zip
