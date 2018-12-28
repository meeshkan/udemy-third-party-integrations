import axios from "axios";

export const postEmailToSendgrid = async (email) => {
    await axios.post("https://api.sendgrid.com/v3/mail/send", {
        personalizations: [{
        to: {
            email,
        }
        }],
        subject: "hi there!",
        from: { email: "mike@porterduff.io", name: "Mike Solomon"}
    }, {
        headers: {
        Authorization: `Bearer u_n_m_o_c_k_200` // change to process.env
        }
    });
}