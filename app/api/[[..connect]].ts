//To enable the server plugin,
// create the file app/api/[[...connect]].ts in your project

import { nextJsApiRouter } from "@connectrpc/connect-next";
import  routes from "../../connect";

const { handler, config } = nextJsApiRouter({ routes });
export { handler as default, config };