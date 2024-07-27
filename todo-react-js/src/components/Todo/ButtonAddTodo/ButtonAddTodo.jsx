import Button from '@mui/material/Button';

export default function ButtonAddTodo({ onClick }) {
  return (
    <Button
      variant="outlined"
      className="w-[80vw]"
      onClick={onClick}
    >
      Добавить задачу
    </Button>
  );
}
