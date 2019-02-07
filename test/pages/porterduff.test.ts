import { unmock } from "unmock";
import { getProjectsAndComments } from "../../pages/util";

beforeEach(async () => await unmock());

test("will succeed, using unmock", async () => {
    const { projects, comments } = await getProjectsAndComments();
    expect(typeof projects[0].id).toBe("number");
    expect(typeof comments[0].comments[0].comment).toBe("string");
});
