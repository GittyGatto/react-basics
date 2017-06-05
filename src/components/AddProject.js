import React, { Component } from 'react';

class AddProject extends Component {

    static defaultProps = {
        category : ['Category A','Category B','Category C' ]
    }

    handleSubmit(e){
        if (this.refs.title.value === ''){
            alert('Project title is required');
        } else {
            this.setState({newProject : {
                title : this.refs.title.value,
                category : this.refs.category.value
            }}, function(){
                //console.log(this.state);
                
                //passing the newPlane to the main component
                
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    constructor (){
        super();
        this.state = {
            newProject : {}
        }
    }
    
    render() {
        
        let categoryOption = this.props.category.map(category => {
            return <option key={category} value="category">{category}</option> 
        });

        return (
            <div className="AddProject">
                <h2>Add Project</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                   
                    <div>
                    <label>Project Name</label><br></br>            
                    <input type="text" ref="title" />
                    </div>
            
                    <input type="submit" value="submit"/>
            
                    <div>
                    <label>Category</label><br></br>  
                   
                    <select ref="category">              
                        {categoryOption}
                    </select>
                    </div>
            
                </form>
            </div>
        );
    }
}

export default AddProject;
