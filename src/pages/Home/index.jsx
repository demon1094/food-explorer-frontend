import { Container, Introduction, Dishes } from "./styles"

import MarketingDesktopIMG from "../../assets/introduction-img.png"
import MarketingMobileIMG from "../../assets/saboresinigualaveis.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Dish } from "../../components/Dish"

import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Home() {
  const [ dishes, setDishes ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`)

      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={5}
        autoClose={700}
        closeButton={false}
      />

      <Header
        onChange={(e) => setSearch(e.target.value)}
      />

      <main>
        <Introduction>
          <img src={MarketingMobileIMG} />
          <img src={MarketingDesktopIMG} />

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
                    id={dish.id}
                    img={dish.image}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
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
                    id={dish.id}
                    img={dish.image}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
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
                    id={dish.id}
                    img={dish.image}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
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