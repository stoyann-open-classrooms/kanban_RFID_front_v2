import './styles/requestsItems.css'

function RequestsItems({request}) {
  return (
    <article className='request_items'>
        <div className='badge_request'>   {request.status}</div>
        <h3>demande kanban : {request.kanban.uid_nfc}</h3>
     
        
        </article>
  )
}

export default RequestsItems