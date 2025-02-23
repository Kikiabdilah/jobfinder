import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import JobList from "../components/JobList";
import jobsData from "../data/jobsData";

const Homepage = () => {
    const navigate = useNavigate(); // Inisialisasi useNavigate

    return (
        <div>
            <header className="h-[calc(100vh-73.4px)] text-center flex flex-col justify-center items-center mt-6 space-y-6">
                <h1 className="text-5xl font-extrabold leading-snug">
                    Build your very own job portal
                </h1>
                <h1 className="text-5xl font-extrabold leading-snug">
                    with <span className="font-bold">Job</span>
                    <span className="text-blue-500 font-bold">Finder.</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                    Discover your next career move with confidence and ease
                </p>
                <a href="/jobs">
                    <button className="flex h-12 items-center justify-center px-6 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg transition-all hover:bg-blue-600 active:bg-blue-700 cursor-pointer">
                        Coba Sekarang
                    </button>
                </a>
            </header>

            <section className="p-5">
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
                    Dari Cari Kerja Sampai Dapat Kerja, Pasti <span className="text-blue-500 font-bold">#JobFinder</span>
                </h2>
                <h2 className="flex text-2xl font-semibold pl-11 justify-center">Job picks for you</h2>
                <JobList jobs={jobsData.slice(0, 6)} />

                {/* Button Lihat Pekerjaan Lainnya */}
                <div className="flex justify-center ">
                    <button
                        onClick={() => navigate("/jobs")} // Perbaikan navigasi
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md cursor-pointer hover:bg-blue-600 transition-all"
                    >
                        Lihat Pekerjaan Lainnya
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
