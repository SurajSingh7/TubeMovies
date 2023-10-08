export function filterData(searchText, movies) {
  
    const filterData = movies.filter((movie) =>
      movie?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  }

  export function filterDataType(searchText, movies) {
  
    const filterDataType = movies.filter((movie) =>
      movie?.category?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterDataType;
  }