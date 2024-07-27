import { useState } from 'react'; // Импортируем useState
import TextField from '@mui/material/TextField';

export default function TextFieldTodo({ onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <TextField
      label="Введите задачу"
      variant="outlined"
      className="w-[80vw]"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
