import RequestsItems from "./requestsItems/RequestsItems"

function RequestsList({requests}) {
  return (
    <div className='container-flex'>
          {requests.map((request) => (
        <RequestsItems key={request._id} request={request} />
        ))}
    </div>
  )
}

export default RequestsList