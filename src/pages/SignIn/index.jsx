import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"

import { toastConfig } from "../../configs/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { signIn } = useAuth()

  async function handleSignIn() {
    if (!email || !password ) {
      return toast.error('Preencha todos os campos.', toastConfig)
    }

    signIn({ email, password })
  }

  return (
    <Container>
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={700}
        limit={5}
        closeButton={false}
        theme="dark"
        position="top-right"
      />

      <Logo />

      <form>
        <div className="input-wrapper">
          <label htmlFor="name">Email</label>
          <Input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="name">Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="button"
          title="Entrar"
          onClick={handleSignIn}
        />
        
        <ButtonText to="/signup" title="Criar uma conta" />
      </form>

    </Container>
  )
}