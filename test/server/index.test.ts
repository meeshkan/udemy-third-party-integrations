import { unmock } from "unmock";
import { postEmailToSendgrid } from "../../server/util";

beforeEach(async () => await unmock({ token: process.env.UNMOCK_TOKEN }));

test("will fail, need to fix with unmock", async () => {
    await postEmailToSendgrid("mike@meeshkan.com");
});
