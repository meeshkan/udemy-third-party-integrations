import React from 'react'
import { getProject, getProjectsAndComments } from "./util";
import { unmock } from "unmock";

class Porterduff extends React.Component<{
    comments: any;
    projects: any;
}, {
    detailedProjects: any;
}> {
    public static getInitialProps() {
        return getProjectsAndComments();
    }
    public state = {
        detailedProjects: {},
    };
    public async componentDidMount() {
        if (process.env.UNMOCK_TOKEN) {
            await unmock({
                token: process.env.UNMOCK_TOKEN
            });
        }
    }
    public render() {
        const { projects, comments } = this.props;
        const { detailedProjects } = this.state;
        return (<div>{projects.map((project, i) => (<div key={`project_${i}`}>
        <h3>{project.name}</h3>
        <img src={project.covers["115"]} />
        {
            detailedProjects[project.id] ?
            <div>{detailedProjects[project.id].description}</div> :
            <div><button onClick={async () => {
                const detailedProject = await getProject(project.id);
                this.setState({
                    detailedProjects: {
                        ...this.state.detailedProjects,
                        [project.id]: detailedProject
                    },
                })
            }}>Description</button></div>
        }
        <div>{comments[i].comments.map((comment, j) => <div key={`comment_${i}_${j}`}><strong>Awesome comment</strong> {comment.comment}</div>)}</div>
    </div>))}</div>);
    }
}

export default Porterduff;
