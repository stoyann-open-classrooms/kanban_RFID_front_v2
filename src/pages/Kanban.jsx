import React from 'react'
import { useParams } from 'react-router-dom'

function Kanban() {
    const params = useParams()
  return (
    <div>Kanban {params.id}</div>
  )
}

export default Kanban