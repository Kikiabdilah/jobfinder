import { useParams } from "react-router-dom";
import { Briefcase, MapPin, Calendar, Tag } from "lucide-react";
import jobsData from "../data/jobsData"; // Pastikan path sesuai

const JobDetail = () => {
    const { id } = useParams(); // Ambil ID dari URL
    const job = jobsData.find((job) => job.id === id); // Cari pekerjaan berdasarkan ID

    if (!job) {
        return <p className="text-center text-red-500 mt-10">Pekerjaan tidak ditemukan!</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
            <h1 className="text-3xl font-bold text-blue-600">{job.title}</h1>
            <p className="text-gray-600 text-lg">{job.company}</p>
            <div className="flex space-x-4 mt-4 text-gray-600">
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> {job.location}</span>
                <span className="flex items-center"><Briefcase className="h-4 w-4 mr-2" /> {job.salary}</span>
                <span className="flex items-center"><Tag className="h-4 w-4 mr-2" /> {job.category}</span>
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> {job.posted}</span>
            </div>

            <h2 className="text-xl font-semibold mt-6">Deskripsi Pekerjaan</h2>
            <p className="text-gray-700 mt-2">{job.description}</p>

            <h2 className="text-xl font-semibold mt-6">Tanggung Jawab</h2>
            <ul className="list-disc ml-6 text-gray-700">
                {job.responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Kriteria</h2>
            <ul className="list-disc ml-6 text-gray-700">
                {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>

            <button className="w-full mt-6 cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Lamar Sekarang
            </button>
        </div>
    );
};

export default JobDetail;
