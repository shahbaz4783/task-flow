import { Task } from "./Task";

export const Tasks = ({ task, onDelete }) => {
	return (
		<>
			{task.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} />
			))}
		</>
	);
};
