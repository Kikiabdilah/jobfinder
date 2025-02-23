import { useState } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import jobsData from "./data/jobsData";
import FilterDropdown from "./components/FilterDropdown";

const JobListing = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedType, setSelectedType] = useState("");

    // Daftar kategori & tipe kerja
    const categories = ["Development & IT", "Design & Creative", "Sales & Marketing", "Product & Manajemen"];
    const jobTypes = ["Full-time", "Remote", "Hybrid"];

    // Fungsi untuk menangani pencarian
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Filter pekerjaan berdasarkan searchTerm, kategori, dan tipe kerja
    const filteredJobs = jobsData.filter(job =>
        (job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)) &&
        (selectedCategory ? job.category === selectedCategory : true) &&  // Perbaikan di sini
        (selectedType ? job.type === selectedType : true)
    );

    return (
        <div className="mx-auto p-6 pt-20">
            <h1 className="flex justify-center text-3xl font-bold mb-4">Lowongan Pekerjaan</h1>

            {/* Container untuk SearchBar & Filter */}
            <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center mb-6">
                {/* SearchBar berada di atas saat layar kecil, dan fleksibel saat besar */}
                <div className="w-full md:flex-grow md:w-[55%]">
                    <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
                </div>

                {/* Container untuk Dropdown Filter saat layar kecil */}
                <div className="flex gap-4 w-full md:w-auto justify-center">
                    {/* Dropdown Filter untuk Kategori */}
                    <FilterDropdown
                        label="Kategori"
                        options={categories}
                        selectedOption={selectedCategory}
                        onSelect={setSelectedCategory}
                    />

                    {/* Dropdown Filter untuk Tipe Kerja */}
                    <FilterDropdown
                        label="Tipe Kerja"
                        options={jobTypes}
                        selectedOption={selectedType}
                        onSelect={setSelectedType}
                    />
                </div>
            </div>

            {/* Menampilkan daftar pekerjaan yang telah difilter */}
            <JobList jobs={filteredJobs} />
        </div>
    );
};

export default JobListing;
