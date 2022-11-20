import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    categoryOptions,
    activeCategoryId,
    activeRatingId,
    onClearFilter,
  } = props

  const clearFilter = () => {
    onClearFilter()
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderCategory = () =>
    categoryOptions.map(each => {
      const {onCategoryChange} = props
      const categoryChange = () => {
        onCategoryChange(each.categoryId)
      }
      const clsname = activeCategoryId === each.categoryId ? 'activeCate' : ''
      return (
        <li key={each.categoryId}>
          <button type="button" className={clsname} onClick={categoryChange}>
            <p>{each.name}</p>
          </button>
          )
        </li>
      )
    })

  const renderRating = () => {
    const {ratingsList, onRatingChange} = props
    return ratingsList.map(each => {
      const ratingChange = () => onRatingChange(each.ratingId)
      const clasname = activeRatingId === each.ratingId ? 'activeRati' : ''
      return (
        <li key={each.ratingId}>
          <button type="button" className={clasname} onClick={ratingChange}>
            <img src={each.imageUrl} alt={`rating ${each.ratingId}`} /> & up
          </button>
        </li>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        placeholder="search"
        onChange={onChangeSearchInput}
        value={searchInput}
      />
      <h1>Category</h1>
      <ul>{renderCategory()}</ul>
      <h1>Rating</h1>
      <ul>{renderRating()}</ul>
      <button type="button" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
