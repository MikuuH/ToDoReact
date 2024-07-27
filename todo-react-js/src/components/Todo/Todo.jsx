import { useState } from 'react';
import ContainerTodo from "./ContainerTodo/ContainerTodo";
import TextFieldTodo from "./TextFieldTodo/TextFieldTodo";
import Containers from "../Containers/Containers";
import ButtonAddTodo from "./ButtonAddTodo/ButtonAddTodo";
import NoDataTextSnackbar from './NoDataTextSnackbar/NoDataTextSnackbar';
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [openCurrent, setOpenCurrent] = useState(false);



  const addTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask('');
    } else {
      console.log(11);
      setOpenCurrent(true);
    }
  };

  const handleOnClose = () => {
    setOpenCurrent(false);
  }

  return (
    <Containers>
      <div className="fixed top-[64px] left-0 right-0 p-1 flex flex-col items-center">
        <TextFieldTodo onChange={setCurrentTask} />
        <div className="mt-[3px]">
          <ButtonAddTodo onClick={addTask} />
        </div>
      </div>
      <ContainerTodo tasks={tasks} />
      <NoDataTextSnackbar opens={openCurrent} OnClose={handleOnClose} />
    </Containers>
  );
}
