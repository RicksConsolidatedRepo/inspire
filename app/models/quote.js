export default class Quote{
  constructor(data){
      this.id = data.id
      this.url = data.url
      this.author = data.author
      this.body = data.body
  }

  get Template(){
      return /*html*/ `
      
      <p> ${this.body} </p>
      <p class="pl-4"> - ${this.author} </p>
      
      `
  }
}