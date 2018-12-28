import React from 'react'
import { getInitialProps } from "./util";


const Porterduff = ({ projects, comments }) => <div>{projects.map((project, i) => (<div key={`project_${i}`}>
    <h3>{project.name}</h3>
    <img src={project.covers["115"]} />
    <div>{comments[i].comments.map((comment, j) => <div key={`comment_${i}_${j}`}><strong>A comment</strong> {comment.comment}</div>)}</div>
</div>))}</div>
Porterduff.getInitialProps = getInitialProps;

export default Porterduff;
