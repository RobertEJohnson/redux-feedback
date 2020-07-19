import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ArrowForward from '@material-ui/icons/ArrowForward';

import {connect} from 'react-redux';

class Understanding extends Component{
    textEntered = (event)=>{
      this.props.dispatch({type: "SET_UNDERSTANDING_COMMENT", payload: event.target.value})
    }
    render(){
        const cardStyle = {
            background: "linear-gradient(rgb(178, 197, 218), orange)",
            paddingLeft: '25px',
            paddingRight: '25px',
          }
          
          function valuetext(value) {
            return `${value}`;
          }
      
          const sliderChange= (e, value)=>{
              console.log(value);
              this.props.dispatch({type: "SET_UNDERSTANDING_RATING", payload: value})
          }
      
          const textField = {
            width: '100%'
          }
      
          const marks = [
            {
              value: 1,
              label: "Help!",
            },
            {
              value: 2,
              label: "Mediocre",
            },
            {
              value: 3,
              label: 'Average',
            },
            {
              value: 4,
              label: 'Great',
            },
            {
              value: 5,
              label: 'Fantastic!',
            }
          ];
          
          const buffButtonMargin = {
            marginTop: '10px'
          }     
          const spanStyle = {
            fontSize: '1.1rem',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
          } 
        return(
            <Card variant="outlined" style={cardStyle}>
            <CardHeader
              align="center"
              title="Understanding Rating"
            />
            <CardContent>
              <Typography align="center" id="discrete-slider" gutterBottom>
                How is your understanding for today's content?<br/>(1-5)
              </Typography>
              <Slider
                defaultValue={3}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks ={marks}
                min={1}
                max={5}
                onChange={sliderChange}
              />
              <br></br>
              <br></br>
              <br></br>
              <Typography align="center" id="discrete-slider" gutterBottom>
              <span style={spanStyle}>Optional Feedback</span><br></br>
              Any insight into what did/could help with understanding?
              </Typography>
              <TextField 
              inputProps={{
                maxLength: 1250,
              }}
              style={textField}
              multiline={true}
              rows='3'
              rowsMax='6'
              id="filled-basic" 
              label="Comments" 
              variant="filled" 
              onChange={this.textEntered}/>
              <Typography align='right'>
                <Button style={buffButtonMargin} variant="contained" color="primary" endIcon={<ArrowForward>Next</ArrowForward>}>
                Next
                </Button>
              </Typography>
              {JSON.stringify(this.props.reduxState.feedback.understanding)}
              {JSON.stringify(this.props.reduxState.feedback.understanding_comment)}
            </CardContent>
          </Card>
        )
    }
}

const mapStateToProps = (reduxState) =>({
  reduxState
})

export default connect(mapStateToProps)(Understanding);