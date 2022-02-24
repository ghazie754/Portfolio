/* eslint-disable import/no-anonymous-default-export */
import Router from "next/router";

export default (context: any, target: string) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(3000, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target);
  }
};
