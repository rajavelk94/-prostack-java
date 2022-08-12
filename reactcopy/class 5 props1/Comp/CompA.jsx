import CompB from '../Comp/CompB'
let CompA =()=>{
    let msg= 'good morning'
    let emp_details={
        ename:'rajavel',
        esal:30000
    }
    return <div>
    <h3> class component </h3>
    <hr/>
    <CompB message={msg} details={emp_details}/>
</div>
    
}
export default CompA