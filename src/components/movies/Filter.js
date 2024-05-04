import './movies.css';
import Button from '../general/Button';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';


/*
props:

    minYear: number – The minimum year state
    setMinYear: function – The setState for the above state
    maxYear: number – The maximum year state
    setMaxYear: function – The setState for the above state
    sort: string – the sort by state
    setSort: function – The setState for the above state
    genres: string – The selected genres state
    setGenres: function – The setState for the above state
    title: string – The title search state
    setTitle: function – The setState for the above state

    */
export default function Filter(props) {
    const minYear = props.minYear;
    const setMinYear = props.setMinYear;
    const maxYear = props.maxYear;
    const setMaxYear = props.setMaxYear;
    const sort = props.sort;
    const setSort = props.setSort;
    const genres = props.genres;
    const setGenres = props.setGenres;
    const title = props.title;
    const setTitle = props.setTitle;

    const sortOptions = [
        { value: "latest", label: "Latest" },
        { value: "oldest", label: "Oldest" },
        { value: "highestrated", label: "Highest Rated" },
        { value: "lowestrated", label: "Lowest Rated" }
    ];
    const TagComponents = [
        { value: "action", label: "Action" },
        { value: "drama", label: "Drama" },
        { value: "comedy", label: "Comedy" },
        { value: "biography", label: "Biography" },
        { value: "romance", label: "Romance" },
        { value: "thriller", label: "Thriller" },
        { value: "war", label: "War" },
        { value: "history", label: "History" },
        { value: "sport", label: "Sport" },
        { value: "sci-fi", label: "Sci-Fi" },
        { value: "documentary", label: "Documentary" },
        { value: "crime", label: "Crime" },
        { value: "fantasy", label: "Fantasy" }
    ];

    return (
        <div id="filter">
            <div className="filter-left">
                <SearchBar value={title} onChange={setTitle} />
                <div className="input-group">
                    <Input type="number" label="Min Year" value={minYear} onChange={setMinYear} />
                    <Input type="number" label="Max Year" value={maxYear} onChange={setMaxYear} />
                    <SelectInput label="Sort" options={sortOptions} value={sort} onChange={setSort} />
                </div>
            </div>
            <div className="filter-right">
                <ul className="tags">
                    {TagComponents.map((tag, index) => (
                        <Tag 
                            key={index}
                            genre={tag.value}
                            filter={genres}
                            genres={genres}
                            setGenres={setGenres}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )

}
