import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Calendar, Tag } from "lucide-react";

const JobCard = ({ job }) => {
    return (
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl font-bold text-blue-600">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {job.type}
                </span>
            </div>

            <div className="space-y-4">
                <div className="flex-col space-x-6 text-gray-600">
                    <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                    </div>
                    <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.salary}
                    </div>
                    <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2" />
                        {job.category}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.posted}
                    </div>
                </div>
                <p className="text-gray-700">{job.description}</p>
                <Link to={`/jobs/${String(job.id)}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        posted: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default JobCard;
