import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { NoteItem } from "../../components/NoteItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { BsCloudDownload } from "react-icons/bs"
import { SlArrowLeft } from "react-icons/sl"

import { toastConfig } from "../../configs/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services/api"

export function EditDish() {
  const [ imageFile, setImageFile ] = useState(null)
  const [ name, setName ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ newIngredient, setNewIngredient ] = useState('')
  const [ ingredients, setIngredients ] = useState([])
  const [ price, setPrice ] = useState('')
  const [ description, setDescription ] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  async function handleUpdateDish() {
    if (!name || !price || !description || !ingredients) {
      return toast.error('Preencha todos os campos e coloque ao menos 1 ingrediente.', toastConfig)
    }

    await api.put(`/dishes?dish_id=${params.id}`, {
      name,
      price,
      description,
      category,
      ingredients
    })
    .then(() => {
      if (imageFile) {
        insertImage()
      }
      toast.success('Prato atualizado com sucesso. Redirecionando...', toastConfig)
      setTimeout(() => {
        navigate(`/details/${params.id}`)
      }, 1500)
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message, toastConfig)
      } else {
        toast.error('Erro inesperado ao editar o prato.', toastConfig)
      }
    })
  }

  async function insertImage() {
    const fileUploadForm = new FormData()
    fileUploadForm.append('image', imageFile)

    await api.patch(`/dishes/image?dish_id=${params.id}`, fileUploadForm)
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(removed) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== removed))
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      await api.get(`/dishes/${params.id}`)
      .then((response) => {
        setName(response.data.name)
        setCategory(response.data.category)
        setPrice(response.data.price)
        setDescription(response.data.description)
        setIngredients(response.data.ingredients.map(ingredient => ingredient.name))
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message, toastConfig)
        } else {
          toast.error('Erro inesperado ao buscar informações do prato.', toastConfig)
        }
      })
    }
    
    fetchDish()
  }, [params.id])

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
        <ButtonText
          icon={SlArrowLeft}
          onClick={handleBack}
          title="voltar"
        />

        <h1>Editar prato</h1>

        <form>
          <div className="input-wrapper">
            <label htmlFor="image">Imagem do prato</label>
            <Input
              id="image"
              icon={BsCloudDownload}
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            {
              imageFile &&
              <p>Imagem selecionada: {imageFile.name}</p>
            }
            {
              !imageFile &&
              <p>Nenhuma imagem selecionada, a imagem atual será mantida.</p>
            }
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              placeholder="Ex: Salada Ceasar"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="meal" selected={category === 'meal'}>Refeição</option>
              <option value="dessert" selected={category === 'dessert'}>Sobremesa</option>
              <option value="drink" selected={category === 'drink'}>Bebida</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredients">
              { 
                ingredients.map((ingredient, index) => (
                  <NoteItem
                    key={index}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }
              <NoteItem
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
                isNew
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="price">Preço</label>
            <Input
              id="price"
              type="number"
              placeholder="R$ 00,00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="6"
              maxLength="400"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição (max: 400 caractéres)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <Button
            onClick={handleUpdateDish}
            title="Salvar alterações"
          />
        </form>
      </main>

      <Footer />
    </Container>
  )
}