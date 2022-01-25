import * as React from "react"

import Layout from "../components/layout"
import Card from "../components/card"

const IndexPage = ({ serverData }) => {
  return (
    <Layout>
      {serverData.map((exchange) => (
        <Card data={exchange} key={exchange.id} />
        ))}
    </Layout>
  )
}

export default IndexPage

export async function getServerData() {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
