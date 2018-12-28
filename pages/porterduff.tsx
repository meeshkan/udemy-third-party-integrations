import axios from 'axios';
import React from 'react'

const Porterduff = ({ projects, comments }) => <div>{projects.map((project, i) => (<div key={`project_${i}`}>
    <h3>{project.name}</h3>
    <img src={project.covers["115"]} />
    <div>{comments[i].comments.map((comment, j) => <div key={`comment_${i}_${j}`}><strong>A comment</strong> {comment.comment}</div>)}</div>
</div>))}</div>
Porterduff.getInitialProps = async () => {
    const { data: { projects }} = await axios.get("https://www.behance.net/v2/projects");
    const commentArray = await Promise.all(projects.map((project) => axios.get(`https://www.behance.net/v2/projects/${project.id}/comments`)));
    return { projects, comments: commentArray.map((input: any) => input.data) };
}

export default Porterduff;
