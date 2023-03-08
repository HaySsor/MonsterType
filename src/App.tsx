import {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
//  https://jsonplaceholder.typicode.com/users
import {getData} from './utils/data.utils';
import {ChangeEvent} from 'react';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetUser = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetUser();
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster: Monster) => {
      return monster.name.toLowerCase().includes(searchInput);
    });
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchInput]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchInput(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default App;
// onSearchChangeHandler={onSearchChange}
//         placeholder='Search monsters'
//         className='monsters-search-box'
