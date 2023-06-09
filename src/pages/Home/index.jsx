import { Container, Introduction, Dishes } from "./styles"

import MarketingIMG from "../../assets/saboresinigualaveis.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Dish } from "../../components/Dish"

import { useState, useEffect } from "react"

import { api } from "../../services/api"

export function Home() {
  const [ dishes, setDishes ] = useState([])

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishes?name')

      setDishes(response.data)
    }

    fetchDishes()
  },[])

  return (
    <Container>
      <Header />

      <main>
        <Introduction>
          <img src={MarketingIMG} />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>
              Sinta o cuidado do preparo com
              ingredientes selecionados.
            </p>
          </div>
        </Introduction>

        <Dishes>
          <section className="dish-category meals">
            <h3>Refeições</h3>

            <div className="dishes-wrapper">
              {
                dishes.filter(dish => dish.category == 'meal').map((dish, index) => (
                  <Dish
                    key={index}
                    img={dish.image}
                    name={dish.name}
                    price={dish.price}
                  />
                ))
              }
            </div>
          </section>

          <section className="dish-category dessert-dishes">
            <h3>Sobremesas</h3>

            <div className="dishes-wrapper">
              {
                dishes.filter(dish => dish.category == 'dessert').map((dish, index) => (
                  <Dish
                    key={index}
                    img={dish.image}
                    name={dish.name}
                    price={dish.price}
                  />
                ))
              }
            </div>
          </section>

          <section className="dish-category main-dishes">
            <h3>Bebidas</h3>

            <div className="dishes-wrapper">
              {
                dishes.filter(dish => dish.category == 'drink').map((dish, index) => (
                  <Dish
                    key={index}
                    img={dish.image}
                    name={dish.name}
                    price={dish.price}
                  />
                ))
              }
            </div>
          </section>
        </Dishes>
      </main>
      
      <Footer />
    </Container>
  )
}