;(function() {
  $.get("http://localhost:3000", data => {
    data.map(item => {
      const id = item.id
      const model = item.model
      const year = item.year
      const price = item.price
      // console.log(id, model, year, price)

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${model}</td>
        <td>${year}</td>
        <td>${price}</td>
      </tr>
      `
      // console.log(newRow)

      $("#app-table-body").append(newRow)
    })
  })
})()
