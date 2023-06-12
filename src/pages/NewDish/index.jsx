import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { NoteItem } from "../../components/NoteItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { SlArrowLeft } from "react-icons/sl"
import { BsCloudDownload } from "react-icons/bs"

export function NewDish() {
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
            />
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              placeholder="Ex: Salada Ceasar"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="category">Categoria</label>
            <select name="category" id="category">
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredients">
              <NoteItem
                value="Pão Naan"
              />
              <NoteItem
                placeholder="Adicionar"
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
            ></textarea>
          </div>

          <Button
            title="Criar prato"
          />
        </form>
      </main>

      <Footer />
    </Container>
  )
}