import React, { Component } from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap'



class DishDetail extends Component{

	componentDidMount(){
				console.log("DishDetail Component componentDidMount invoked")
	}
	componentDidUpdate(){
				console.log("DishDetail Component componentDidUpdate invoked")
	}
	renderComments(comments){
		if(comments==null){
			return(<div></div>);
		}
		const comnts=comments.map((comment) =>{
			return(
				<li key={comment.id}>
					<p>
						{comment.comment}
					</p>
					<p>-- {comment.author}
					&nbsp;
					{new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}

					</p>
				</li>
			);
		})
		return(
			<div className="col-12 col-md-5 m-1">
				<h4> Comments</h4>
				<ul className="list-unstyle">
					{comnts}
				</ul>

			</div>
		);
	}

	renderDish(dish)
	{
		if (dish != null){
			return(
				<Card className="col-12 col-md-5 m-1">
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>

				</Card>
				);
		}
		else{
			return(<div></div>);
		}
	}


	render()
	{
		console.log("DishDetail Component render invoked")

		const dish=this.props.dish

		if(dish==null)
		{
			return (<div></div>);
		}

		const dishDetails =this.renderDish(dish)
		const dishComments=this.renderComments(dish.comments)
		return(
			<div className="row">
				{dishDetails}
				{dishComments}

			</div>

			);
	}


}
export default DishDetail;
