function Search() {
  return (
    <div className="w-500 pt-2 relative mx-auto text-gray-600">
      <input
        className="w-full h-12 focus:border focus:border-orange focus:bg-gray-light bg-gray px-5 pr-16 rounded-lg text-sm placeholder:text-gray-dark focus:outline-none"
        type="search"
        name="search"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
      />
      <button
        type="submit"
        className="absolute right-4 bottom-0 top-2 my-auto mx-0"
      >
        <img src="src/assets/search-icon.svg" alt="" />
      </button>
    </div>
  );
}

export default Search;
