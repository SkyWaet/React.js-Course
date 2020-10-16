import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,BreadcrumbItem,Breadcrumb
} from 'reactstrap';
import {Link} from "react-router-dom";

function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return (<div></div>);
    }

    const RenderComments = ({comments})=> {
        if (comments != null) {
            console.log(typeof (comments))
            const commentsList =comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-Us',{year: "numeric", month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date))) }</p>
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


    const DishDetail = (props)=> {
        console.log(JSON.stringify(props.comments));
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <Breadcrumb >
                        <BreadcrumbItem><Link to={"/menu"}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className={"col-12"}>
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-5 m-1"}>
                        <RenderDish dish = {props.dish} />
                    </div>
                    {props.comments!=null ? <RenderComments comments = {props.comments} />:<div></div>}
                </div>
            </div>
        );

    }

export default DishDetail;