import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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

  async function handleSignUp() {
    toast.success('Conta criada com sucesso! Redirecionando...', toastConfig)
  }

  return (
    <Container>
      <ToastContainer
        pauseOnFocusLoss={false}
        autoClose={1500}
        limit={5}
        closeButton={false}
        position="top-right"
      />
      
      <Logo />

      <form>
        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <Input
            type="text"
            placeholder="Exemplo: Diego Araujo"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="name">Email</label>
          <Input
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="name">Senha</label>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
        </div>

        <Button
          type="button"
          title="Criar conta"
          onClick={handleSignUp}
        />
      </form>

      <ButtonText href="/" title="Já tenho uma conta" />
    </Container>
  )
}