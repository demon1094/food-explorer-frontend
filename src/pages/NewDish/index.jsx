import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { NoteItem } from "../../components/NoteItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { SlArrowLeft } from "react-icons/sl"
import { BsCloudDownload } from "react-icons/bs"

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

  async function handleCreateDish() {
    await api.post('/dishes', {
      name,
      price,
      description,
      category,
      ingredients
    })
    .then((response) => {
      insertImage(response.data)
      alert('Prato criado com sucesso')
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar o prato.')
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

  return (
    <Container>
      <Header />

      <main>
        <ButtonText
          icon={SlArrowLeft}
          title="voltar"
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