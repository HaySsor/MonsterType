import './search-box.styles.css';

type SeachBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SeachBoxProps) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default SearchBox;
