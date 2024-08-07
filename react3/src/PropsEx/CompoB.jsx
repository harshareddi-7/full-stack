function CompoB(props){
    return <>
    <h2>Component-B</h2>
    <pre>{JSON.stringify(props)}</pre>
    <h3>Wish Message:{props.message}</h3>
    <h4>Employee Details:{props.Hype}</h4>
    </>
}
export default CompoB;