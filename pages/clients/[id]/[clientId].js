import React from 'react'
import {useRouter} from 'next/router'

const clientId = () => {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>Client project page</div>
  )
}

export default clientId