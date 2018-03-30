import React, { PropTypes, Component } from 'react'

export default class Mood extends Component {
   constructor(props) {
      super(props)

      this.state = {
         comments: [
            {
               text: 'TEST COMMENT'
            },
            {
               text: 'TEST COMMENT 2'
            }
         ]
      }
   }


   onYearBtnClick(e) {
      this.props.setMood(e.target.innerText)
   }
   onDayBtnClick(e){
      this.props.setDate(e.target.innerText);
   }
   test(){
      // console.log(this.refs.comment.value)
      this.state.comments.push({text: this.refs.comment.value})
      this.refs.comment.value = ''
      this.setState(this.state)
   }
   render() {
      const { mood } = this.props
      return (
         <div>
            <p> Your current mood :  { mood.mood } </p>
            <p> Today: { mood.date } </p>
            <div>
               <button onClick={::this.onDayBtnClick}> MONDAY </button>
               <button onClick={::this.onDayBtnClick}> TUESDAY </button>
               <button onClick={::this.onDayBtnClick}> WEDNESDAY </button>
            </div>
            <div>
               <p> Do you wanna change your mood? </p>
               <button onClick={::this.onYearBtnClick}> Perfect </button>
               <button onClick={::this.onYearBtnClick}> Normal </button>
               <button onClick={::this.onYearBtnClick}> Sad </button>
            </div>
            <hr />
            <input type='text' ref='comment' />
            <button onClick={::this.test}> Добавить </button>
            <ul>
               {
                  this.state.comments.map((value) => {
                     return <li>{value.text}</li>
                  })
               }
            </ul>
         </div>
      )
   }
}

Mood.propTypes = {
   mood: PropTypes.object.isRequired,
   setMood: PropTypes.func.isRequired,
   setDate: PropTypes.func.isRequired
}
