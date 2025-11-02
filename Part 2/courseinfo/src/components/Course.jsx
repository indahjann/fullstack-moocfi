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

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
        console.log('what is happening', sum, part)
        return sum + part.exercises
    }, 0)
    
    console.log('final total:', total)
    
    return(
        <div>
            <b>total of {total} exercises</b>
        </div>
    )
}

const Course = ({ course }) => {
    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}


export default Course