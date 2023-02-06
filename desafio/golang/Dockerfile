FROM golang AS dev_local
WORKDIR /app

COPY ./fullcycle.go .

RUN go build fullcycle.go


FROM scratch

COPY --from=dev_local /app/fullcycle ./fullcycle

CMD ["./fullcycle"]
