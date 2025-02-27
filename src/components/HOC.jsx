import React from "react";

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component{
        state={
            data : [],
            term: "",
        };
        componentDidMount(){
            const UserData = async () =>{
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                this.setState({...this.state, data: json})
            }
            UserData();
        }
        render(){
            let {term, data} =  this.state;
            let filterData = data.slice(0,10).filter((d)=>{
                if (entity === "users") {
                    const { name } = d;
                    return name && name.indexOf(term) >= 0;
                }
                if (entity === "todos") {
                    const { title } = d;
                    return title && title.indexOf(term) >= 0;
                }
            });
            return(
                <div>
                <h2>{entity}</h2>
                <input type='text' value={term}
                onChange={(e) => this.setState({...this.state, term: e.target.value})}/>
                <WrappedComponent data={filterData}></WrappedComponent>
                </div>
            )
        }
    }
}

export default HOC;