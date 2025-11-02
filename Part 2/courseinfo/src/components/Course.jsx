const Header = ({ course }) => {
    return(
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return(
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </div>
    )
}

const Course = ({ course }) => {
    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
        </div>
    )
}


export default Course