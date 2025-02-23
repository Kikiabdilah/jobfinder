import PropTypes from 'prop-types';
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
    if (!jobs || !Array.isArray(jobs)) {
        return <p className="text-center col-span-3 text-gray-500">Data pekerjaan tidak tersedia.</p>;
    }

    return (
        <div className="pt-2 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {jobs.length > 0 ? (
                    jobs.map(job => <JobCard key={job.id} job={job} />)
                ) : (
                    <p className="text-center col-span-3 text-gray-500">Pekerjaan tidak ditemukan.</p>
                )}
            </div>
        </div>
    );
};


JobList.propTypes = {
    jobs: PropTypes.array.isRequired,
};

export default JobList;
