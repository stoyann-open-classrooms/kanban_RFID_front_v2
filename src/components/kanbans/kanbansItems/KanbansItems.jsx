import { Link } from 'react-router-dom'
import './styles/kanbansitems.css'
function KanbansItems({kanban}) {
  return (
    <article className='kanban_items'>
        <h2>{kanban.uid_nfc}</h2>
        <div>
            {kanban.product ? (
                <>
                <p>{kanban.product.name}</p>
                <p>quantité : <strong>{kanban.quantity}</strong></p>
                </>
            ): (
              
                <div className='no_kanban'>
                <p className='noKanban'>ce kanban n'a pas de produit associée</p>
                <Link to={`/kanbans/${kanban._id}`}>
                <button>Détails</button>
                </Link>
                </div>
            
            )}
        </div>
    </article>
  )
}

export default KanbansItems