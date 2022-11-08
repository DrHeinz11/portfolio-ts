import { HandleScrollTop } from "../types/type";

const HandleScrollTop: HandleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default HandleScrollTop;
