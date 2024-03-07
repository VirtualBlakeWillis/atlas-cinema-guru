import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Input label="Email" type="email" className="email" value={email} setValue={setEmail} />
      <SelectInput
        label="Select"
        className="select"
        value={select}
        setValue={setSelect}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />
      <Button label="Submit" className="submit" />
      <SearchBar title={search} setTitle={setSearch} />
    </div>
  );
}

export default App;
