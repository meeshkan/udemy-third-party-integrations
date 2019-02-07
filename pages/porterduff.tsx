import { Box, Button, Grid } from "grommet";
import React from "react";
import { unmock } from "unmock";
import { getProject, getProjectsAndComments } from "./util";

class Porterduff extends React.Component<{
    comments: any;
    projects: any;
}, {
    detailedProjects: any;
    commentsOpen: any;
    descriptionOpen: any;
}> {
    public static getInitialProps() {
        return getProjectsAndComments();
    }
    public state = {
        commentsOpen: {},
        descriptionOpen: {},
        detailedProjects: {},
    };
    public async componentDidMount() {
        if (process.env.UNMOCK_TOKEN) {
            await unmock({
                token: process.env.UNMOCK_TOKEN,
            });
        }
    }
    public render() {
        const { projects, comments } = this.props;
        const { detailedProjects } = this.state;
        return (<Grid
            columns={{
              count: 3,
              size: "auto",
            }}
            gap="small"
          >{projects.map((project, i) => (
            <Box gap="small" direction="column" justify="center" pad="medium" elevation="small" key={`project_${i}`}>
        <h3>{project.name}</h3>
        <img style={{display: "block", width: "270px", height: "270px"}} src={project.covers["202"]} />
        {
            detailedProjects[project.id] ?
            <div>{detailedProjects[project.id].description}</div> :
            <div><Button margin={{right: "small"}} primary onClick={async () => {
                const detailedProject = await getProject(project.id);
                this.setState({
                    detailedProjects: {
                        ...this.state.detailedProjects,
                        [project.id]: detailedProject,
                    },
                });
            }} label="Description"></Button><Button label="Comments"></Button></div>
        }
        {/*
            <div>{comments[i].comments.map((comment, j) =>
                <div key={`comment_${i}_${j}`}><strong>Awesome comment</strong> {comment.comment}</div>)}</div>*/}
    </Box>))}</Grid>);
    }
}

export default Porterduff;
