import React, {Component} from 'react';
import {
    Media, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (<div></div>);
    }

    renderComments(comments = []) {
        if (comments != null) {
            const commentsList = comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <ul className={"list-unstyled"}>
                            <li>{comment.comment}</li>
                            <li>--{comment.author},{comment.date}</li>
                        </ul>
                    </li>
                )
            })
            return (
                <div className={"col-12 col-md-5 m-1"}>
                    <h4>Comments</h4>
                    <ul className={"list-unstyled"}>
                        {commentsList}
                    </ul>
                </div>
            )
        } else
            return (<div></div>);
    }


    render() {
        return (
            <div className={"row"}>
                <div className={"col-12 col-md-5 m-1"}>
                    {this.renderDish(this.props.dish)}
                </div>

                {this.renderComments(this.props.dish.comments)}

            </div>
        );

    }
}

export default DishDetail;