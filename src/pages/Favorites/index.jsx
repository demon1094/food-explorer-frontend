import { Container, Dish } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { AiOutlineStar } from "react-icons/ai"

import { useState, useEffect } from "react"
import { api } from "../../services/api"

export function Favorites() {
  const [ favoriteDishes, setFavoriteDishes ] = useState([])

  async function handleRemoveFavoriteDish(id) {
    await api.delete(`/favorites/${id}`)
  }

  useEffect(() => {
    async function fetchFavoriteDishes() {
      const response = await api.get('/favorites')

      setFavoriteDishes(response.data)
    }

    fetchFavoriteDishes()
  }, [favoriteDishes])

  return (
    <Container>
      <Header />

      <main>
        <h1>Meus favoritos</h1>
        
        {
          favoriteDishes.length > 0 &&
          <>
            <section className="favorite-dishes-wrapper">
              {
                favoriteDishes.map((favoriteDish) => (
                  <Dish key={favoriteDish.id}>
                    <img src={`${api.defaults.baseURL}/files/${favoriteDish.image}`} alt="Imagem do prato" />
                    <div>
                      <h3>{favoriteDish.name}</h3>
                      <button onClick={() => handleRemoveFavoriteDish(favoriteDish.id)}>
                        Remover dos favoritos
                      </button>
                    </div>
                  </Dish>
                ))
              }
            </section>
          </>
        }
        {
          favoriteDishes.length <= 0 &&
          <div className="empty-favorites">
            <AiOutlineStar />
            <h2>Você não possui pratos favoritos</h2>
          </div>
        }
      </main>

      <Footer />
    </Container>
  )
}