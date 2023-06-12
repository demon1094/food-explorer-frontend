import { Container, Dish } from "./styles"

import { EmptyDisplay } from "../../components/EmptyDisplay"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { AiOutlineStar } from "react-icons/ai"

import { toastConfig } from "../../services/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

export function Favorites() {
  const [ favoriteDishes, setFavoriteDishes ] = useState([])

  toastConfig.autoClose = 700

  const navigate = useNavigate()

  async function handleRemoveFavoriteDish(id) {
    await api.delete(`/favorites/${id}`)
    .then(() => {
      toast.info('Prato removido dos favoritos', toastConfig)
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message, toastConfig)
      } else {
        toast.error('Erro ao remover prato dos favoritos', toastConfig)
      }
    })
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
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
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={5}
        autoClose={700}
        closeButton={false}
      />

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
                    <img
                      src={`${api.defaults.baseURL}/files/${favoriteDish.image}`}
                      alt="Imagem do prato"
                      onClick={() => handleDetails(favoriteDish.id)}
                    />
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
          <EmptyDisplay
            icon={AiOutlineStar}
            message="Nenhum prato favoritado"
          />
        }
      </main>

      <Footer />
    </Container>
  )
}