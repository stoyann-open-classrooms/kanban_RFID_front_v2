import  { useEffect, useContext } from 'react'
import KanbansList from '../components/kanbans/KanbansList';
import Searchbar from '../components/shared/searchBar/Searchbar';
import Spinner from '../components/shared/spinner/Spinner';
import KanbanContext from '../context/kanban/KanbanContext';

function Kanbans() {

  const { kanbans, loading, fetchKanbans } = useContext(KanbanContext);

  useEffect(() => {
    fetchKanbans();
  }, []);
  console.log(kanbans);
  if (loading) {
    return <Spinner />;
  } else {
  return (
    <>
        <h1>Kanbans</h1>
        <Searchbar placeholder={'Rechercher un kanban par son identifiant RFID'} />
        <KanbansList kanbans={kanbans}/>
    </>
  )
}
}

export default Kanbans