import  { useEffect , useContext } from 'react'
import { useParams } from 'react-router-dom'
import KanbanContext from '../context/kanban/KanbanContext';

function Kanban() {
    const params = useParams()
    const { kanban, loading, fetchKanban } = useContext(KanbanContext);

    useEffect(() => {
      fetchKanban(params.id);
    }, []);
    console.log(kanban);


  return (
    <div>Kanban {params.id}</div>
  )
}

export default Kanban