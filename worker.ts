interface Env {
  ASSETS: {
    fetch: typeof fetch;
  };
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Canonical redirect: www -> apex (HTTP 301)
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.replace(/^www\./, "");
      return Response.redirect(url.toString(), 301);
    }

    // Canonical redirect: force trailing slash with permanent 301 (instead of Cloudflare asset default 307)
    if (!url.pathname.endsWith("/") && !url.pathname.split("/").pop()?.includes(".")) {
      url.pathname = `${url.pathname}/`;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
