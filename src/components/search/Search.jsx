import lupa from '/public/icons/lupa.svg'

function Search({toggleModal}) {
    return (
        <div className="flex justify-center mt-9 sm:m-0">
            <div className="shadow-md rounded-2xl inline-flex items-center">
                <button onClick={toggleModal} className="py-4 px-2 rounded-l-2xl border">Whole, Finland</button>
                <button onClick={toggleModal} className="py-4 px-2 text-gray-400 border">Add guests</button>
                <button onClick={toggleModal} className="px-4 py-4 rounded-r-2xl border">
                    <img src={lupa} alt="lupa" width={21} />

                </button>
            </div>

        </div>
    )

}
export default Search
