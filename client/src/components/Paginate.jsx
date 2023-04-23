const Paginate = ({ countriesPerPage, allCountries, paginate }) => {
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1)
  }
  return (
    <>
      <nav>
        <ul>
          {pageNumbers &&
            pageNumbers.map((number) => (
              <li key={number}>
                <a onClick={() => paginate(number)}>{number}</a>
              </li>
            ))}
        </ul>
      </nav>
    </>
  )
}
export default Paginate
