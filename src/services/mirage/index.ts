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
            image: "./expressTradicional.svg",
            name: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            amount: "9.90",
          },
          {
            id: 2,
            image: "./expressoAmericano.svg",
            name: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            amount: "9.90",
          },
          {
            id: 3,
            image: "./expressoCremoso.svg",
            name: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            amount: "9.90",
          },
          {
            id: 4,
            image: "./expressoGelado.svg",
            name: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            amount: "9.90",
          },
          {
            id: 5,
            image: "./cafecomLeite.svg",
            name: "Café com Leite.svg",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            amount: "9.90",
          },
          {
            id: 6,
            image: "./latte.svg",
            name: "latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            amount: "9.90",
          },
          {
            id: 7,
            image: "./capuccino.svg",
            name: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            amount: "9.90",
          },
          {
            id: 8,
            image: "./macchiato.svg",
            name: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            amount: "9.90",
          },
          {
            id: 9,
            image: "./mocaccino.svg",
            name: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            amount: "9.90",
          },
          {
            id: 10,
            image: "./cubano.svg",
            name: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            amount: "9.90",
          },
          {
            id: 11,
            image: "./havaiano.svg",
            name: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            amount: "9.90",
          },
          {
            id: 12,
            image: "./arabe.svg",
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            amount: "9.90",
          },
          {
            id: 13,
            image: "./arabe.svg",
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            amount: "9.90",
          },
          {
            id: 14,
            image: "./irlandes.svg",
            name: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            amount: "9.90",
          }
        ]
      })
    },
  
    routes() {
      this.namespace = 'api'; 
  
      this.get('/coffees', () => {
        return this.schema.all('coffee') //retornar todas a transações
      })//quando ouver uma requisição do tipo get para a rota transactions
      
      this.get('/coffees/:id', () => {
        return this.schema.all('coffee') //retornar todas a transações
      })//quando ouver uma requisição do tipo get para a rota transactions

      //criando uma rota
      this.post('/coffees', (schema, request) => {
        const data = JSON.parse(request.requestBody) //
  
        return schema.create('coffee', data)
      })

      this.put('/coffees/:id', (schema, request) => {
        
        const data = JSON.parse(request.requestBody) //
  
        return schema.create('coffee', data)
      })

      
    }
  
  })

  return server
}
