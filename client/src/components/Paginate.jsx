import '../style.css'

const Paginate = ({
	countriesPerPage,
	totalCountries,
	currentPage,
	paginate
}) => {
	const pageNumbers = []
	const totalPages = Math.ceil(totalCountries / countriesPerPage)

	const handlePaginate = pageNumber => {
		if (pageNumber <= 0 || pageNumber > totalPages) return
		paginate(pageNumber)
	}

	for (let i = 0; i < totalPages; i++) {
		pageNumbers.push(i + 1)
	}

	return (
		<>
			<nav className='paginateContainer'>
				<ul className='ul'>
					<li className='li pageInfo'>
						Page {currentPage} of {totalPages}
					</li>
					<li className='li'>
						<button
							className='paginateButton rounded-left'
							disabled={currentPage <= 1}
							onClick={() => handlePaginate(currentPage - 1)}
						>
							{'<'}
						</button>
					</li>
					<li className='li'>
						<button
							className='paginateButton rounded-right'
							disabled={currentPage >= totalPages}
							onClick={() => handlePaginate(currentPage + 1)}
						>
							{'>'}
						</button>
					</li>
				</ul>
			</nav>
		</>
	)
}
export default Paginate
