import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { NoteItem } from "../../components/NoteItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { SlArrowLeft } from "react-icons/sl"
import { BsCloudDownload } from "react-icons/bs"

import { toastConfig } from "../../services/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../services/api"

export function NewDish() {
  const [ imageFile, setImageFile ] = useState(null)
  const [ name, setName ] = useState('')
  const [ category, setCategory ] = useState('meal')
  const [ newIngredient, setNewIngredient ] = useState('')
  const [ ingredients, setIngredients ] = useState([])
  const [ price, setPrice ] = useState(0)
  const [ description, setDescription ] = useState('')

  const navigate = useNavigate()

  async function handleCreateDish() {
    if (!name || !price || !description || !ingredients) {
      return toast.error('Preencha todos os campos e coloque ao menos 1 ingrediente.', toastConfig)
    }

    if (!imageFile) {
      return toast.error('Imagem é obrigatório', toastConfig)
    }

    await api.post('/dishes', {
      name,
      price,
      description,
      category,
      ingredients
    })
    .then((response) => {
      insertImage(response.data)
      toast.success('Prato criado com sucesso. Redirecionando...', toastConfig)
      setTimeout(() => {
        navigate(`/details/${response.data}`)
      }, 1500)
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message, toastConfig)
      } else {
        toast.error('Erro inesperado ao cadastrar o prato.', toastConfig)
      }
    })
  }

  async function insertImage(dish_id) {
    const fileUploadForm = new FormData()
    fileUploadForm.append('image', imageFile)

    await api.patch(`/dishes/image?dish_id=${dish_id}`, fileUploadForm)
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
          title="voltar"
          onClick={handleBack}
        />

        <h1>Novo prato</h1>

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
              <p>Nenhuma imagem selecionada.</p>
            }
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              placeholder="Ex: Salada Ceasar"
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
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
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
              maxLength="200"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição (max: 200 caractéres)"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <Button
            onClick={handleCreateDish}
            title="Criar prato"
          />
        </form>
      </main>

      <Footer />
    </Container>
  )
}