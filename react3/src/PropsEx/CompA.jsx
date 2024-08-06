import CompoB from './CompoB';
function CompA(){
    let msg='Good Evening';
    return <>
    <h2>Component-A</h2>
    <CompoB message={msg}/>
    </>
}
export default CompA;