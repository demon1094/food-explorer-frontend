/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function ButtonText({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      { Icon && <Icon /> }

      { title }
    </Container>
  )
}