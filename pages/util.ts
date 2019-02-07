import axios from "axios";

export const getProjectsAndComments = async () => {
    const { data: { projects }} = await axios.get("https://www.behance.net/v2/projects?api_key=u_n_m_o_c_k_200");
    const commentArray = await Promise.all(
        projects.map((project) =>
            axios.get(`https://www.behance.net/v2/projects/${project.id}/comments?api_key=u_n_m_o_c_k_200`)));
    return { projects, comments: commentArray.map((input: any) => input.data) };
};

export const getProject = async (id) => {
    const { data } = await axios.get(`https://www.behance.net/v2/projects/${id}?api_key=u_n_m_o_c_k_200`);
    return data;
};
