import { unmock } from "unmock";
import { getInitialProps } from "../../pages/util";

beforeEach(async () => await unmock());

test("will fail, need to fix with unmock", async () => {
    const { projects, comments } = await getInitialProps();
    expect(typeof projects[0].id).toBe("number");
    expect(typeof comments[0].comments[0].comment).toBe("string");
});