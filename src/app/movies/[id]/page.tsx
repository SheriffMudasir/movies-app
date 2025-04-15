import { FaStar } from "react-icons/fa";

interface MoviePropType {
    params: {
        id: string
    }
}
const MovieDetail = ({ params }: MoviePropType) => {
    const movies = [
        {
            id: "1",
            title: "Inception",
            comments: 124,
            rating: 4.7,
            description: "A mind-bending thriller by Christopher Nolan.",
            commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
        },
        {
            id: "2",
            title: "Interstellar",
            comments: 98,
            rating: 4.8,
            description: "A space exploration film by Christopher Nolan.",
            commentsList: [
                "Amazing visual effects!",
                "Loved the soundtrack.",
                "A bit confusing but great.",
            ],
        },
        {
            id: "3",
            title: "The Dark Knight",
            comments: 255,
            rating: 4.9,
            description: "The iconic Batman film directed by Christopher Nolan.",
            commentsList: [
                "The best Batman movie!",
                "Heath Ledger was outstanding.",
                "Iconic movie.",
            ],
        },
    ];

    const movie = movies.find((movie) => movie.id === params.id)

    return (
        <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
            {/* MOVIE DESCRIPTION */}
            <div className="bg-gradient-to-r from-blue-500  to-indigo-600 p-8 rounded-xl shadow-xl">
                <h2 className="text-4xl font-semibold text-white mb-4">{movie?.title}</h2>
                <p className="text-lg text-gray-300">{movie?.description}</p>
            </div>

            {/* RATING AND COMMENTS */}
            <div className="bg-gray-800  p-6 rounded-xl shadow-xl">
                <div className="flex justify-between">
                    <div>
                        <p className="text-xl text-gray-300 ">Rating:</p>
                        <div className="flex items-center text-yellow-50">
                            <FaStar className="mr-1" />
                            <span className="font-semibold text-2xl">{movie?.rating}</span> / 5
                        </div>
                    </div>

                    <div>
                        <p className="text-xl text-gray-300">Comments:</p>
                        <p className="text-2xl font-semibold text-white">{movie?.comments}</p>
                    </div>


                </div>
            </div>
            {/* COMMENTS */}
            <div className="text-white bg-gray-600 p-6 rounded-xl shadow-xl">
                <h1 className="text-2xl font-semibold mb-4">Comment</h1>
                <ul className="space-y-4">
                    {movie?.commentsList.map((comment, index) => (
                        <li className="bg-gray-800 p-2 rounded-2xl" key={index}>{comment}</li>
                    )
                    )}
                </ul>
            </div>

        </div >
    )
}

export default MovieDetail