import GithubUserList from "@/components/exercise/github-user-list.vue";
import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";

describe("Github user list component", () => {
  it("can add user to the list", async () => {
    const wrapper = shallowMount(GithubUserList);
    const input = wrapper.find("input[role='inputUser'");
    const btn = wrapper.find("button[role='buttonAdd'");

    // expect(input.element.tagName).toBe("INPUT");

    input.setValue("sorayasmine");
    const jsonMock = jest.fn().mockResolvedValue({
      login: "sorayasmine",
    });
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    });
    await btn.trigger("submit");
    await flushPromises();
    expect(window.fetch).toHaveBeenCalledWith("https://api.github.com/users/sorayasmine");
    expect(wrapper.vm.data[0]).toEqual({
      login: "sorayasmine",
    });
  });
});
