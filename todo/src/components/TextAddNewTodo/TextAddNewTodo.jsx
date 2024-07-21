import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function TextAddNewTodo({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[100%] mt-5">
        <TextField
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
          label="Новая задача"
          id="fullWidth"
          variant="outlined"
        />
      </div>
      <div className="mt-1">
        <Button
          onClick={handleAddTodo}
          variant="contained"
          color="primary"
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}
