class CustomError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "NoticiaError"

  }
}