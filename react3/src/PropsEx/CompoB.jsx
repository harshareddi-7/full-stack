function CompoB(props){
    return <>
    <h2>Component-B</h2>
    <pre>{JSON.stringify(props)}</pre>
    <h3>Wish Message:{props.message}</h3>
    </>
}
export default CompoB;