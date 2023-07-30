const tasks = [
    {
        id: 1,
        text: 'React Crash Course',
        date: 'Sun July 30th',
        remainer: false,
    },
    {
        id: 2,
        text: 'React complete Course',
        date: 'Mon August 1st',
        remainer: true,
    },
    {
        id: 3,
        text: 'Next.js Full COurse',
        date: 'Mon August 8th',
        remainer: true,
    },
]

export const Tasks = () => {
  return (
    <>
    {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}
