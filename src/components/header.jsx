import React from "react"
import { HeaderNav } from "../Styles/HeaderStyles"

const Header = () => (
  <HeaderNav>
    <Container>
      <Flex>
        <Logo>Logo</Logo>
        <Manu>
          <button>
            <span></span>
            <span></span>
          </button>
        </Manu>
      </Flex>
    </Container>
  </HeaderNav>
)
export default Header
