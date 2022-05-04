import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",

      // all of these are optional
      domain:
        process.env.NODE_ENV === "production" ? "jamesmckenzie.io" : undefined,
      expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: [process.env.SESSION_SECRET!],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
