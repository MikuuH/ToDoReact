import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function TextAddNewTodo({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[50%] mt-5 flex">
        <TextField
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
          label="Новая задача"
          id="fullWidth"
          variant="outlined"
        />
        <Button
          onClick={handleAddTodo}
          variant="contained"
          color="primary"
          className="ml-2"
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}
