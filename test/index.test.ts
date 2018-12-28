import axios from "axios";
import { unmock } from "unmock";

beforeEach(async () => await unmock());

/*
test("expect hubspot api to work", async () => {
    const { data: { vid } } = await axios.post("https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/mike@meeshkan.com/?hapikey=u_n_m_o_c_k_200", {
        properties: [{
            property: "firstname",
            value: "Mike"
        },{
            property: "lastname",
            value: "Solomon"
        },]
    });
    expect(vid).toBe(12345);
});
*/