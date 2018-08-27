import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../results/ImageResults'

 class Search extends Component {

    state = {
        searchText: '',
        amount: 15,
        apiURL: 'https://pixabay.com/api',
        apiKey: '9018995-4b8f3e81eef7e79ab136cb764',
        images: []
    }
    
    onChangeText = (e) =>{
        const val = e.target.value
        
        this.setState({[e.target.name]: val}, 
            ()=>{
                if (val === '') {
                    this.setState({images: []})
                } else {
                    axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images: res.data.hits}))  
                .catch(err => console.log(err))
                }
            })   
        }
        onAmountChange = (e, index, value) =>{
        this.setState({amount: value})
        }

    render() {
        return (
        <div className="container">
            <TextField
            name="searchText"
            value={this.state.searchText}
            onChange={this.onChangeText}
            fullWidth={true}
            floatingLabelText="Type to search"
            />
        <SelectField
            name='amount'
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>): null}
        </div>
        )
    }
    }
export default Search
