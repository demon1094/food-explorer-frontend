import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function SignUp() {
  const toastConfig = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 60,
    progress: undefined,
    theme: "dark",
    pauseOnFocusLoss: false
  }

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return toast.error('Preencha todos os campos.')
    }

    const validEmail = email.toLowerCase().match(/[a-z0-9.]+@[a-z0-9]+\.com(\.br)*/)

    if (!validEmail) {
      return toast.error('Email inválido.', toastConfig)
    }

    const validPassword = password.match(/^(?=.*\d)(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/)

    if (!validPassword) {
      return toast.error('Senha fraca.')
    }

    api.post('/users', { name, email, password })
    .then(() => {
      toast.success('Conta criada com sucesso! Redirecionando...', toastConfig)
      setTimeout(() => {
        navigate('/')
      }, 2300)
    })
    .catch(error => {
      if (error.response) {
        toast.error(error.response.data.message, toastConfig)
      } else {
        toast.error('Não foi possível cadastrar.', toastConfig)
      }
    })
  }

  return (
    <Container>
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={1500}
        limit={5}
        closeButton={false}
        theme="dark"
        position="top-right"
      />
      
      <Logo />

      <form>
        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <Input
            type="text"
            placeholder="Exemplo: Diego Araujo"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="name">Email</label>
          <Input
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="name">Senha</label>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="valid-password">
            <p>Deve conter ao menos um número e um caractere especial (@,#,!,$,&,*)</p>
          </div>
        </div>

        <Button
          type="button"
          title="Criar conta"
          onClick={handleSignUp}
        />
        
        <ButtonText href="/" title="Já tenho uma conta" />
      </form>
    </Container>
  )
}