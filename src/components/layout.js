import * as React from "react"
import tw from "tailwind-styled-components";

import Header from "./header"

export default function Layout({ children }) {
  return (
      <div className="h-max bg-gray-700">
      <Header />
        <Container>
          <Section>
            {children}
          </Section>
        </Container>
    </div>
  )
}

const Container = tw.div`
  mt-0
`;

const Section = tw.div`
  flex
  flex-col
  items-center
  justify-center
`;
