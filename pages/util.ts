import axios from "axios";

export const getProjectsAndComments = async () => {
    const { projectsErrorCode, projects } = await axios
        .get("https://www.behance.net/v2/projects?api_key=u_n_m_o_c_k_200")
        .then((x) => ({projectsErrorCode: null, projects: x.data.projects}),
                (e) => ({projectsErrorCode: e.code, projects: []}));
    const comments: any = await Promise.all(
        projects.map((project) =>
            axios
                .get(`https://www.behance.net/v2/projects/${project.id}/comments?api_key=u_n_m_o_c_k_200`)
                .then((x) => x.data, () => ({comments: []}))));
    return { projectsErrorCode, projects, comments };
};

export const getProject = async (id) => {
    const data = await axios.get(`https://www.behance.net/v2/projects/${id}?api_key=u_n_m_o_c_k_200`)
        .then((x) => x.data, () => ({}));
    return data;
};
