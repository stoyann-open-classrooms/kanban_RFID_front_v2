import './productOrders.css'

function ProductOrders() {
  return (
    <>
        <h3>Historiques des commandes</h3>
    <table>
      <tr>
        <th>date commande</th>
        <th>N° commande</th>
        <th>quantité</th>
        <th>Date livraison</th>
        <th>Nombre de jours</th>
      </tr>
      <tr>
        <td>10.01.2014</td>
        <td>BGRY78</td>
        <td>134</td>
        <td>10.01.2014</td>
        <td>24</td>
      </tr>
      <tr>
        <td>10.01.2014</td>
        <td>BGRY78</td>
        <td>100</td>
        <td>10.01.2014</td>
        <td>32</td>
      </tr>
    </table>
    </>
  )
}

export default ProductOrders