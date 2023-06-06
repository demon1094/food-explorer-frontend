import { Container, Introduction, Dishes } from "./styles"

import MarketingIMG from "../../assets/saboresinigualaveis.png"
import SaladaIMG from "../../assets/saladaRavanello.png"
import PrugnaPieIMG from "../../assets/prugnaPie.png"
import SucoIMG from "../../assets/suco.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Dish } from "../../components/Dish"

import { useState, useEffect } from "react"

// import { useCart } from "../../hooks/Cart"

export function Home() {
  const [ dishes, setDishes ] = useState([])

  // const { data, addDishToCart, dishCounter, setDishCounter, setDishesOnCartCounter } = useCart()

  // async function handleAddDish(dish) {
  //   const dishToAdd = Object.assign(dish, dishCounter)

  //   await addDishToCart(dishToAdd)

  //   setDishCounter({ amount: 1 })
  //   setDishesOnCartCounter(data.length + 1)
    
  //   alert('Prato adicionado no carrinho.')
  // }

  useEffect(() => {
    function fetchDishes() {
      setDishes([
        {
          id: 1,
          img: SaladaIMG,
          name: 'Salada Ravanello',
          price: '49,90',
          category: 'meal'
        },
        {
          id: 2,
          img: SaladaIMG,
          name: 'Arroz com Fritas',
          price: '29,90',
          category: 'meal'
        },
        {
          id: 3,
          img: PrugnaPieIMG,
          name: 'Prugna Pie',
          price: '79,90',
          category: 'main'
        },
        {
          id: 4,
          img: PrugnaPieIMG,
          name: 'Filé Osvaldo Aranha',
          price: '99,90',
          category: 'main'
        },
        {
          id: 5,
          img: SucoIMG,
          name: 'Suco de Maracujá',
          price: '13,90',
          category: 'drink'
        },
        {
          id: 6,
          img: SucoIMG,
          name: 'Café Expresso',
          price: '15,90',
          category: 'drink'
        },
      ])
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
                    img={dish.img}
                    name={dish.name}
                    price={dish.price}
                  />
                ))
              }
            </div>
          </section>

          <section className="dish-category main-dishes">
            <h3>Pratos principais</h3>

            <div className="dishes-wrapper">
              {
                dishes.filter(dish => dish.category == 'main').map((dish, index) => (
                  <Dish
                    key={index}
                    img={dish.img}
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
                    img={dish.img}
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