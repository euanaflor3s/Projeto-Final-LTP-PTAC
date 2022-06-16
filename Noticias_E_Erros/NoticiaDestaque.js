class NoticiaDestaque extends Noticia {
  set imagemDestaque(imagem) {
    this._imagem = imagem;
  }
  
  get mostrarNoticiaDestaque() {
     try {
      return this.noticiaNova();

    } catch (erro) {
      return erro

    } finally {
      console.log("Executado")
    }

  }
  noticiaNova() {

    if (this._imagem !="" ) {

      return `
        <div class="noticiaDestaque">
          <div class="esquerda">
            <a href="${this._link}">
            <h1 class="destaqueTitulo">${this._titulo}</h1></a><p>${this._data} </p>
            <p>${this._resumo}</p>
          </div>
       
          <img  src="${this._imagem}" class="imagem">

        </div>
      `
    }else {
      throw new CustomError("A noticia não está completa")
    }
  }
}