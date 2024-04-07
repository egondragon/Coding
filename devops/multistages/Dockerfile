FROM alpine:3.17.3
RUN echo "xavki" > /var/xavki.1

FROM alpine:3.17.3
RUN echo "xavki" > /var/xavki.2
COPY --from=0 /var/xavki.1 /

FROM alpine:3.17.3
RUN echo "xavki" > /var/xavki.3
COPY --from=1 /var/xavki.2 /


