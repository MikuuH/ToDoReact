import TextField from '@mui/material/TextField';

export default function TextAddNewTodo() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[50%] mt-5">
        <TextField
          fullWidth
          label="Новая задача"
          id="fullWidth"
        />
      </div>
    </div>
  );
}
