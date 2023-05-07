# O desafio da FullCycle se baseia na criação de uma imagem com uma pequena aplicação em GO que printa ao executar o comando "docker run" a frase "Full Cycle Rocks!!"

FROM golang:latest AS golang

WORKDIR /go/src
COPY ./hello.go /go/src
RUN  go build hello.go
ENTRYPOINT ["./hello"]


FROM scratch
COPY --from=golang /go/src/hello /
ENTRYPOINT [ "./hello" ]
