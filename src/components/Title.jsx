function Title(props) { 
    return (
        <h1 className="text-3xl text-center font-bold">
            {props.children}
        </h1>
    );
}

export default Title;