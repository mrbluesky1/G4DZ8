import {useForm} from "react-hook-form";

export default function App() {
    const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data)

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>First name</p>
            <input {...register("FirstName", {required:true, maxLength: 20})}/>
            <p>Surname</p>
            <input {...register("Surname", {pattern: /^[A-Za-z]+$/i})}/>
            <p>Age</p>
            <input type={"number"} {...register("Age", {min: 19, max: 99, required:true})}/>
            <div className={"radios"}>
                <input className={"radio1"} type="radio" id={"male"} value={"male"} {...register("Gender")}/>
                <label htmlFor={"male"}>Male</label>
                <input className={"radio1"} type="radio" id={"female"} value={"female"} {...register("Gender", {required:true})}/>
                <label htmlFor={"female"}>Female</label>
            </div>
            <input type={"submit"}/>
        </form>
    )
}


// import React from "react";
//
// class FormLogin extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             login: ""
//         }
//         this.HandleChange = this.HandleChange.bind(this)
//         this.HandleSubmit = this.HandleSubmit.bind(this)
//     }
//
//     HandleChange(event) {
//         this.setState({value: event.target.value})
//     }
//
//     HandleSubmit(event) {
//         alert("Ваш логин: " + this.state.value)
//         event.preventDefault()
//     }
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.HandleSubmit}>
//                     Введите логин:
//                     <label>
//                         <input className='input1' type="text" value={this.state.value} onChange={this.HandleChange}/>
//                     </label>
//                     <input type="submit" value="submit"/>
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default FormLogin