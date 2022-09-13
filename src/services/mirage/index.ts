// src/server.js
import { createServer, Model } from "miragejs"
import { useEffect, useState } from "react"
import { api } from "../api"

export function makeServer({ environment = "test" } = {}) {
    const [ users, setUser ] = useState([])


  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server: any) {
      server.create("user", { name: "Bob" })
      server.create("user", { name: "Alice" })
    },

    routes() {
      this.namespace = "api"

      this.get<any>("/users", (schema: any) => {
        return schema.users.all(),
        setUser(schema)
      })
    },
  })

  
console.log(users)

  return server
}
