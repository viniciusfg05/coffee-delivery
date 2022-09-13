// src/server.js
import { createServer, Model } from "miragejs"
import { useEffect, useState } from "react"
import { api } from "../api"



export function makeServer({ environment = "test" } = {}) {


  let server = createServer({
    environment,
    models : { 
      coffee: Model //modulo que vamos criar 
    },
  
    seeds(server) {
      server.db.loadData({
        coffees: [
          {
            id: 1,
            Image: "./expressTradicional.svg",
            name: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            amount: 9.90,
          },
          {
            id: 2,
            Image: "./expressoAmericano.svg",
            name: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            amount: 9.90,
          },
          {
            id: 3,
            Image: "./expressoCremoso.svg",
            name: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            amount: 9.90,
          },
          {
            id: 4,
            Image: "./expressoGelado.svg",
            name: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            amount: 9.90,
          },
          {
            id: 5,
            Image: "./cafecomLeite.svg",
            name: "Café com Leite.svg",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            amount: 9.90,
          },
          {
            id: 6,
            Image: "./latte.svg",
            name: "latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            amount: 9.90,
          },
          {
            id: 7,
            Image: "./capuccino.svg",
            name: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            amount: 9.90,
          },
          {
            id: 8,
            Image: "./macchiato.svg",
            name: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            amount: 9.90,
          },
          {
            id: 9,
            Image: "./mocaccino.svg",
            name: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            amount: 9.90,
          },
          {
            id: 10,
            Image: "./cubano.svg",
            name: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            amount: 9.90,
          },
          {
            id: 11,
            Image: "./havaiano.svg",
            name: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            amount: 9.90,
          },
          {
            id: 12,
            Image: "./arabe.svg",
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            amount: 9.90,
          },
          {
            id: 13,
            Image: "./arabe.svg",
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            amount: 9.90,
          },
          {
            id: 14,
            Image: "./irlandes.svg",
            name: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            amount: 9.90,
          }
        ]
      })
    },
  
    routes() {
      this.namespace = 'api'; 
  
      this.get('/coffees', () => {
        return this.schema.all('coffee') //retornar todas a transações
      })//quando ouver uma requisição do tipo get para a rota transactions
        
      //criando uma rota
      this.post('/coffees', (schema, request) => {
        const data = JSON.parse(request.requestBody) //
  
        return schema.create('coffee', data)
      })
    }
  
  })

  return server
}
