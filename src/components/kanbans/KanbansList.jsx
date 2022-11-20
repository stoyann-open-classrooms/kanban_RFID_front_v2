import React from 'react'
import kanbanReducer from '../../context/kanban/KanbanReducer'
import KanbansItems from './kanbansItems/KanbansItems'

function KanbansList({kanbans}) {
  return (
    <div className='container-flex'>
     {kanbans.map((kanban) => (
        <KanbansItems key={kanban._id} kanban={kanban} />
        ))}
    </div>
  )
}

export default KanbansList