import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <div className="relative  pl-9 pr-9">
            <Search className="absolute left-12 top-3 h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder="Cari berdasarkan posisi, perusahaan, atau lokasi..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={onSearch}
            />
        </div>
    );
};

// Tambahkan validasi PropTypes
SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
