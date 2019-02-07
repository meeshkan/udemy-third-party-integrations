import axios from "axios";

export const postEmailToSendgrid = async (email) => {
    await axios.post("https://api.sendgrid.com/v3/mail/send", {
        from: { email: "mike@porterduff.io", name: "Mike Solomon"},
        personalizations: [{
            to: {
                email,
            },
        }],
        subject: "hi there!",
    }, {
        headers: {
            Authorization: `Bearer u_n_m_o_c_k_200`, // change to process.env
        },
    });
};
