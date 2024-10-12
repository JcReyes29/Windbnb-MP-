

function Search(prop) {
    return (
        <div className="flex justify-center mt-9 sm:m-0">
            <div className="shadow-md rounded-2xl inline-flex items-center">
                <button className="py-4 px-2 rounded-l-2xl border">City name</button>
                <button className="py-4 px-2 text-gray-400 border">Add guests</button>
                <button className="px-4 py-4 rounded-r-2xl border">
                <img src="/public/icons/lupa.svg" alt="lupa" width={21}/>

                </button>
            </div>

        </div>
    )

}
export default Search
