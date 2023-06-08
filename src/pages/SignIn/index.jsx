import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"

export function SignIn() {
  return (
    <Container>
      <Logo />

      <form>
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

        <Button title="Entrar" />
      </form>

      <ButtonText href="/signup" title="Criar uma conta" />
    </Container>
  )
}