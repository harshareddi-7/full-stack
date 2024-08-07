import CompoB from './CompoB';
function CompA(){
    let msg='Good Evening';
    let Data={
        id:101,
        name:"Anju",
        style:true
    }
    return <>
    <h2>Component-A</h2>
    <CompoB message={msg} Hype={Data}/>
    </>
}
export default CompA;