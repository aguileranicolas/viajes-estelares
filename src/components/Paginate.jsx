const Paginate = ({
  countriesPerPage,
  totalCountries,
  currentPage,
  paginate,
}) => {
  const pageNumbers = []
  const totalPages = Math.ceil(totalCountries / countriesPerPage)

  const handlePaginate = (pageNumber) => {
    if (pageNumber <= 0 || pageNumber > totalPages) return
    paginate(pageNumber)
  }

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i + 1)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <button
              disabled={currentPage <= 1}
              onClick={() => handlePaginate(currentPage - 1)}
            >
              Prev
            </button>
          </li>
          <li>
            Page {currentPage} of {totalPages}
          </li>
          <li>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => handlePaginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Paginate
